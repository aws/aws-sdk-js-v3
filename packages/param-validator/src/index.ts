import { isArrayBuffer } from '@aws/is-array-buffer';
import { isIterable } from '@aws/is-iterable';
import { toDate } from '@aws/protocol-timestamp';
import {
    Blob,
    Boolean,
    Float,
    Integer,
    List,
    Map,
    Member,
    String,
    Structure,
    Timestamp,
} from '@aws/types';

export interface ValidationContext<T> {
    value: T;
    violations: Array<string>;
}

export interface ValidationOptions {
    enum?: boolean;
    max?: boolean;
    min?: boolean;
    pattern?: boolean;
    required?: boolean;
    strictTypes?: boolean;
}

const DEFAULT_OPTIONS: ValidationOptions = {
    min: true,
    required: true
};

export class Validator {
    private readonly checkEnum: boolean;
    private readonly checkMin: boolean;
    private readonly checkMax: boolean;
    private readonly checkPattern: boolean;
    private readonly checkRequired: boolean;
    private readonly strictTypes: boolean;

    constructor(
        options: ValidationOptions = DEFAULT_OPTIONS
    ) {
        this.checkEnum = options.enum === true;
        this.checkMax = options.max === true;
        this.checkMin = options.min === true;
        this.checkPattern = options.pattern === true;
        this.checkRequired = options.required === true;
        this.strictTypes = options.strictTypes === true;
    }

    validate<T>(
        value: T,
        model: Member,
        path: string = '[Root shape]'
    ): ValidationContext<T> {
        const {shape} = model;
        switch (shape.type) {
            case 'blob':
                return this.validateBlob(
                    value,
                    shape,
                    path,
                    model.streaming
                );
            case 'boolean':
                return this.validateBoolean(value, shape, path);
            case 'float':
                return this.validateNumber(value, shape, path);
            case 'integer':
                return this.validateNumber(value, shape, path);
            case 'list':
                return this.validateList(value, shape, path);
            case 'map':
                return this.validateMap(value, shape, path);
            case 'string':
                return this.validateString(value, shape, path);
            case 'structure':
                return this.validateStructure(value, shape, path);
            case 'timestamp':
                return this.validateTimestamp(value, shape, path);
        }
    }

    private rangeViolations(
        value: number,
        path: string,
        min: number = Number.NEGATIVE_INFINITY,
        max: number = Number.POSITIVE_INFINITY,
        violationType = 'Length'
    ): Array<string> {
        const violations: Array<string> = [];

        if (this.checkMin && value < min) {
            violations.push(
                `${path}: ${violationType} violation -- ${value} is less than the specified minimum of ${min}`
            );
        }

        if (this.checkMax && value > max) {
            violations.push(
                `${path}: ${violationType} violation -- ${value} is greater than the specified maximum of ${max}`
            );
        }

        return violations;
    }

    private validateBlob<T>(
        value: T,
        model: Blob,
        path: string,
        streamingMember: boolean = false
    ): ValidationContext<T> {
        const {streaming = streamingMember} = model;
        if (!streaming) {
            if (
                ArrayBuffer.isView(value) ||
                isArrayBuffer(value) ||
                (!this.strictTypes && typeof value === 'string')
            ) {
                return {
                    value,
                    violations: this.rangeViolations(
                        typeof value === 'string'
                            ? byteCount(value)
                            : (value as ArrayBuffer|ArrayBufferView).byteLength,
                        path,
                        model.min,
                        model.max
                    )
                }
            }

            return {value, violations: [
                invalidTypeMessage(
                    path,
                    [
                        'ArrayBuffer',
                        'ArrayBufferView',
                        this.strictTypes ? '' : 'string'
                    ].filter(v => Boolean(v)),
                    value
                )
            ]};
        }

        return {value, violations: []};
    }

    private validateBoolean<T>(
        value: T,
        model: Boolean,
        path: string
    ): ValidationContext<T> {
        const context = { value, violations: [] as Array<string> };
        if (typeof value !== 'boolean') {
            context.violations.push(
                invalidTypeMessage(path, ['boolean'], context.value)
            );
        }

        return context;
    }

    private validateNumber<T>(
        value: T,
        model: Float|Integer,
        path: string
    ): ValidationContext<T> {
        if (typeof value !== 'number' || !isFinite(Number(value))) {
            return {value, violations: [
                invalidTypeMessage(path, ['finite number'], value)
            ]};
        }

        return {
            value,
            violations: this.rangeViolations(
                Number(value),
                path,
                model.min,
                model.max,
                'Range'
            )
        };
    }

    private validateList<T>(
        value: any,
        model: List,
        path: string
    ): ValidationContext<T> {
        if (!isIterable(value)) {
            return {value, violations: [
                invalidTypeMessage(path, ['Array', 'Iterable'], value)
            ]};
        }

        const {max, member, min} = model;

        // Collect validated elements into an array in case the input is a
        // generator or other iterable that may only be consumed once.
        const context = {
            value: [] as Array<T>,
            violations: [] as Array<string>,
        };
        for (const element of value) {
            const { value, violations } = this.validate(
                element,
                member,
                `${path}[${context.value.length}]`
            );
            context.value.push(value);
            context.violations.push(...violations);
        }

        context.violations.push(
            ...this.rangeViolations(context.value.length, path, min, max)
        )

        return context as any;
    }

    private validateMap<T extends {[key: string]: any}|Iterable<[any, any]>>(
        value: any,
        model: Map,
        path: string
    ): ValidationContext<T> {
        if (
            !isIterable(value) &&
            !(value && typeof value === 'object')
        ) {
            return {value, violations: [
                invalidTypeMessage(path, ['Map', 'object', 'Iterable'], value)
            ]};
        }

        const { key: keyModel, max, min, value: valueModel } = model;

        const violations: Array<string> = [];
        let size = 0;
        if (isIterable(value)) {
            const collected = new Map<any, any>();
            for (const [elementKey, elementValue] of value) {
                const {
                    value: keyValue,
                    violations: keyViolations
                } = this.validate(
                    elementKey,
                    keyModel,
                    `${path}[${collected.size}].key`
                );
                const {
                    value: valueValue,
                    violations: valueViolations
                } = this.validate(
                    elementValue,
                    valueModel,
                    `${path}[${collected.size}].value`
                );
                collected.set(keyValue, valueValue);
                violations.push(...keyViolations, ...valueViolations);
            }
            value = collected;
            size = collected.size;
        } else {
            const collected: {[key: string]: any} = {};
            for (const key of Object.keys(value)) {
                const {
                    value: keyValue,
                    violations: keyViolations
                } = this.validate(
                    key,
                    keyModel,
                    `${path}[${size}].key`
                );
                const {
                    value: valueValue,
                    violations: valueViolations
                } = this.validate(
                    (value as any)[key],
                    valueModel,
                    `${path}[${size}].value`
                );
                collected[keyValue] = valueValue;
                size++;
                violations.push(...keyViolations, ...valueViolations);
            }
            value = collected;
        }

        violations.push(...this.rangeViolations(size, path, min, max));

        return {value, violations};
    }

    private validateString<T>(
        value: T,
        model: String,
        path: string
    ): ValidationContext<T> {
        const context = { value, violations: [] as Array<string> };

        if (typeof context.value === 'string') {
            const {enum: enumValues, max, min, pattern} = model;

            if (
                this.checkPattern &&
                pattern &&
                !(new RegExp(pattern)).test(context.value as any)
            ) {
                context.violations.push(
                    `${path}: Pattern violation -- "${context.value}" does not match regex pattern /${pattern}/`
                );
            }

            if (
                this.checkEnum &&
                enumValues &&
                enumValues.indexOf(context.value as any) < 0
            ) {
                context.violations.push(
                    `${path}: Enum violation -- "${context.value}" is not in the list of allowed values (${enumValues.join(', ')})`
                );
            }

            context.violations.push(...this.rangeViolations((
                context.value as any).length,
                path,
                min,
                max
            ));
        } else {
            context.violations.push(
                invalidTypeMessage(path, ['string'], context.value)
            );
        }

        return context;
    }

    private validateStructure<T extends {[key: string]: any}>(
        value: T,
        model: Structure,
        path: string
    ): ValidationContext<T> {
        if (!value || typeof value !== 'object') {
            return {value, violations: [
                invalidTypeMessage(path, ['object'], value)
            ]};
        }

        const {members, required} = model;
        const context = { value: {} as T, violations: [] as Array<string> };
        for (const key of Object.keys(members)) {
            const member = value[key];
            if (member === undefined) {
                if (this.checkRequired && required.indexOf(key) > -1) {
                    context.violations.push(
                        `${path}: Required property ${key} not set`
                    );
                }
                continue;
            }

            const {
                value: validatedMember,
                violations: memberViolations,
            } = this.validate(member, members[key], `${path}.${key}`);

            context.value[key] = validatedMember;
            context.violations.push(...memberViolations);
        }

        return context;
    }

    private validateTimestamp<T>(
        value: T,
        model: Timestamp,
        path: string
    ): ValidationContext<T> {
        const context = { value, violations: [] as Array<string> };

        if (
            !(context.value instanceof Date) ||
            Object.prototype.toString.call(context.value) !== '[object Date]'
        ) {
            if (this.strictTypes) {
                context.violations.push(
                    invalidTypeMessage(path, ['Date'], context.value)
                );
            } else {
                context.value = new Date(String(toDate(value as any))) as any;
            }
        }

        if (String(context.value) === 'Invalid Date') {
            context.violations.push(
                `${path}: Invalid date received for timestamp property`
            )
        }

        return context;
    }
}

function byteCount(value: string): number {
    let count = 0;
    for (let i = 0, length = value.length; i < length; i++) {
        const char = value.charCodeAt(i);
        if (char < 0x80) {
            count += 1;
        } else if (char < 0x800) {
            count += 2
        } else if (char < 0xd800) {
            count += 3;
        } else if (char < 0xdc00) {
            count += 4;
            i++;
        } else {
            count += 3;
        }
    }
    return count;
}

function describeType(value: any): string {
    switch (typeof value) {
        case 'function':
            return `function (${(value as any).name})`;
        case 'object':
            return Object.prototype.toString.call(value);
        case 'number':
            return !isFinite(value) ? String(value) : 'number';
        default:
            return typeof value;
    }
}

function invalidTypeMessage(
    path: string,
    expected: Array<string>,
    received: any
): string {
    return `${path}: Invalid type. Expected ${
        expected.length === 0
        ? '[no valid values]'
        : expected.length === 1
            ? expected[0]
            : `${expected.slice(0, -1).join(', ')} or ${expected.slice(-1)[0]}`
    } but received ${describeType(received)}`;
}
