const ATTRIBUTE_PATH_TAG = 'AmazonDynamoDbAttributePath';
const EXPECTED_TAG = `[object ${ATTRIBUTE_PATH_TAG}]`;

/**
 * The path to an attribute of a DynamoDB item or to a property
 * or member thereof. Supports map property access (`map.property`)
 * and list member access (`list[1]`).
 *
 * Control characters that are part of the property identifier may be
 * used when escaped with a backslash (`\`) character.
 */
export class AttributePath {
    readonly elements: Array<PathElement>;
    readonly [Symbol.toStringTag] = ATTRIBUTE_PATH_TAG;

    constructor(path: string|Iterable<PathElement>) {
        if (typeof path === 'string') {
            this.elements = parsePath(path);
        } else {
            this.elements = [...path];
        }
    }

    /**
     * Determine if the provided value is an AttributePath object.
     * Compatible with AttributePath objects generated in other iframes
     * or Node VMs.
     */
    static isAttributePath(arg: any): arg is AttributePath {
        return arg instanceof AttributePath
            || Object.prototype.toString.call(arg) === EXPECTED_TAG;
    }
}

/**
 * A string identifying a top-level property of a DynamoDB item or
 * of a MapAttributeValue.
 */
export interface AttributeName {
    type: 'AttributeName';
    name: string;
}

/**
 * The index of a particular member of a ListAttributeValue.
 */
export interface ListIndex {
    type: 'ListIndex';
    index: number;
}

export type PathElement = AttributeName|ListIndex;

const enum ParseState {
    controlCharacter = 1000,
    identifier,
    listIndex,
}
const LEFT_BRACKET = '[';
const RIGHT_BRACKET = ']';
const PATH_DELIMITER = '.';
const ESCAPE_CHARACTER = '\\';

function parsePath(path: string): Array<PathElement> {
    const elements: Array<PathElement> = [];
    let state: ParseState = ParseState.identifier;
    let collected = '';

    for (
        let iter = path[Symbol.iterator](),
            curr = iter.next(),
            peek = iter.next();
        curr.done === false;
        curr = peek, peek = iter.next()
    ) {
        if (state === ParseState.identifier) {
            switch (curr.value) {
                case LEFT_BRACKET:
                    state = ParseState.listIndex;
                    // fallthrough
                case PATH_DELIMITER:
                    if (collected === '') {
                        throw new Error(
                            `Invalid control character encountered in path: ${path}`
                        );
                    }
                    elements.push({type: 'AttributeName', name: collected});
                    collected = '';
                    break;
                case ESCAPE_CHARACTER:
                    if (
                        peek.value === PATH_DELIMITER ||
                        peek.value === LEFT_BRACKET ||
                        peek.value === ESCAPE_CHARACTER
                    ) {
                        curr = peek;
                        peek = iter.next();
                    }
                    // fallthrough
                default:
                    collected += curr.value;
            }
        } else if (state === ParseState.listIndex) {
            switch (curr.value) {
                case RIGHT_BRACKET:
                    const intVal = parseInt(collected);
                    if (!isFinite(intVal)) {
                        throw new Error(
                            `Invalid array index (${collected}) encountered in path: ${path}`
                        );
                    }
                    elements.push({type: 'ListIndex', index: intVal});
                    collected = '';
                    state = ParseState.controlCharacter;
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    collected += curr.value;
                    break;
                default:
                    throw new Error(
                        `Invalid array index character (${curr.value}) encountered in path: ${path}`
                    );
            }
        } else {
            switch (curr.value) {
                case LEFT_BRACKET:
                    state = ParseState.listIndex;
                    break;
                case PATH_DELIMITER:
                    state = ParseState.identifier;
                    break;
                default:
                    throw new Error(
                        `Bare identifier encountered between list index accesses in path: ${path}`
                    );
            }
        }
    }

    if (collected.length > 0) {
        elements.push({type: 'AttributeName', name: collected});
    }

    return elements;
}
