import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import { ScalarAttributeType } from '../marshaller';
import { Schema } from './schema';

/**
 * The enumeration of types supported by this marshaller package.
 */
export const TypeTags = {
    Any: 'Any',
    Binary: 'Binary',
    Boolean: 'Boolean',
    Collection: 'Collection',
    Custom: 'Custom',
    Date: 'Date',
    Document: 'Document',
    Hash: 'Hash',
    List: 'List',
    Map: 'Map',
    Null: 'Null',
    Number: 'Number',
    Set: 'Set',
    String: 'String',
    Tuple: 'Tuple',
};

/**
 * A type understood by this marshaller package.
 */
export type TypeTag = keyof typeof TypeTags;

/**
 * An abstract base type defining the common characteristics of all SchemaTypes
 */
export interface BaseType<T = any> {
    /**
     * The type of node represented by this object.
     */
    type: TypeTag;

    /**
     * The key in which this value will be persisted in DynamoDB. If not
     * provided, the key will be assumed to be the same in the input and in the
     * persisted record.
     */
    attributeName?: string;

    /**
     * An optional default value factory. If a type has a defined
     * defaultProvider and its value is `undefined` in the provided input, the
     * defaultProvider will be called and its return value serialized.
     */
    defaultProvider?: () => T;
}

function isBaseType(arg: any): arg is BaseType {
    return Boolean(arg) && typeof arg === 'object'
        && typeof arg.type === 'string'
        && arg.type in TypeTags
        && ['string', 'undefined'].indexOf(typeof arg.attributeName) > -1;
}

/**
 * The types of keys a given attribute can represent.
 */
export const KeyTypes = {
    HASH: 'HASH',
    RANGE: 'RANGE',
};

/**
 * A type of DynamoDB key.
 */
export type KeyType = keyof typeof KeyTypes;

/**
 * A trait applied to types that may contain a DynamoDB key.
 */
export interface KeyableType {
    /**
     * Key configuration as it pertains to the DynamoDB table.
     */
    keyType?: KeyType;

    /**
     * An array of key configurations as they apply to global and local
     * secondary indices.
     */
    indexKeyConfigurations?: {[key: string]: KeyType},
}

function isKeyableType(arg: object): boolean {
    const {keyType, indexKeyConfigurations} = arg as any;

    if (!(keyType === undefined || keyType in KeyTypes)) {
        return false;
    }

    const idxKeysType = typeof indexKeyConfigurations;

    if (indexKeyConfigurations && idxKeysType === 'object') {
        for (const indexName of Object.keys(indexKeyConfigurations)) {
            if (!(indexKeyConfigurations[indexName] in KeyTypes)) {
                return false;
            }
        }

        return true;
    }

    return idxKeysType === 'undefined';
}

/**
 * A node used to store values whose type is variable or unknown. The value will
 * be marshalled an unmarshalled based on runtime type detection, which may
 * result in data not being precisely round-tripped (e.g., "empty" types such as
 * zero-length strings, buffers, and sets will be returned from the mapper as
 * `null` rather than an empty instance of the originally submitted type).
 */
export interface AnyType extends BaseType, marshallOptions {
    type: 'Any';
}

/**
 * A node used to store binary data (e.g., Buffer, ArrayBuffer, or
 * ArrayBufferView objects).
 */
export interface BinaryType extends BaseType< ArrayBuffer | ArrayBufferView>, KeyableType {
    type: 'Binary';
}

/**
 * A node used to store boolean values.
 */
export interface BooleanType extends BaseType<boolean> {
    type: 'Boolean';
}

/**
 * A node used to store an untyped or mixed collection. Values provided for this
 * node will be marshalled using run-time type detection and may not be exactly
 * the same when unmarshalled.
 */
export interface CollectionType extends
    BaseType<Array<any>>,
    marshallOptions
{
    type: 'Collection';
}

/**
 * A node whose type is not managed by the marshaller, but rather by the
 * `marshall` and `unmarshall` functions defined in this SchemaType. Useful for
 * objects not easily classified using the standard schema taxonomy.
 */
export interface CustomType<JsType> extends BaseType<JsType>, KeyableType {
    type: 'Custom';

    /**
     * The attribute type to be used for this field when creating or updating
     * the DynamoDB table definition for this record.
     *
     * Required if the custom field is being used as a key and the schema is
     * used to create or update a table or index.
     */
    attributeType?: ScalarAttributeType;

    /**
     * A function that converts an input value into a DynamoDB attribute value.
     * This function will not be invoked if the input value is undefined.
     *
     * @param input - The value to be converted.
     */
    marshall: (input: JsType)=> AttributeValue;

    /**
     * A function that converts a DynamoDB AttributeValue into a JavaScript
     * value.
     *
     * @param persistedValue - The value to be converted.
     */
    unmarshall: (persistedValue: AttributeValue) => JsType;
}

/**
 * A node represented by a Date object.
 *
 * Nodes of this type will be marshalled into DynamoDB Number types containing
 * the epoch timestamp of the date for use with DyanmoDB's Time-to-Live feature.
 *
 * Timezone information is not persisted.
 */
export interface DateType extends BaseType<string|number|Date>, KeyableType {
    type: 'Date';
}

/**
 * A constructor that takes no arguments.
 */
export interface ZeroArgumentsConstructor<T> {
    new (): T;
}

/**
 * A node represented by its own full Schema. Marshalled as an embedded map.
 */
export interface DocumentType<T = {[key: string]: any}>extends BaseType<T> {
    type: 'Document';

    /**
     * A Schema outlining how the members of this document are to be
     * (un)marshalled.
     */
    members: Schema;

    /**
     * A constructor to invoke to create an object onto which the document's
     * members will be unmarshalled. If not provided, `Object.create(null)` will
     * be used.
     */
    valueConstructor?: ZeroArgumentsConstructor<T>;
}

/**
 * A node used to store a key-to-value mapping of mixed or untyped values.
 * Values provided for this node will be marshalled using run-time type
 * detection and may not be exactly the same when unmarshalled.
 */
export interface HashType extends
    BaseType<{[key: string]: any}>,
    marshallOptions
{
    type: 'Hash';
}

/**
 * A node used to store an array or iterable of like values, e.g.,
 * `Array<string>`.
 *
 * @see CollectionType For untyped or mixed lists
 * @see TupleType For tuples
 */
export interface ListType<E = any> extends BaseType<Array<E>> {
    type: 'List';

    /**
     * The schema node by which each member of the list should be
     * (un)marshalled.
     */
    memberType: SchemaType;
}

/**
 * A node used to store a mapping of strings to like values, e.g.,
 * `Map<string, ArrayBuffer>`.
 *
 * @see HashType For untyped of mixed hashes
 * @see DocumentType For strongly-typed documents
 */
export interface MapType<E = any> extends BaseType<Map<string, E>> {
    type: 'Map';
    memberType: SchemaType;
}

/**
 * A node used to store null values.
 */
export interface NullType extends BaseType<null> {
    type: 'Null';
}

/**
 * A node used to store a number value. Numbers should be representable as IEEE
 * 754 double precision floating point values to ensure no precision is lost
 * during (un)marshalling.
 */
export interface NumberType extends BaseType<number>, KeyableType {
    type: 'Number';
    versionAttribute?: boolean;
}

export interface SetType extends BaseType<Set<any>> {
    type: 'Set';
    memberType: 'String'|'Number'|'Binary';
}

/**
 * A node used to store a string value.
 */
export interface StringType extends BaseType<string>, KeyableType {
    type: 'String';
}

/**
 * A node used to store a fixed-length list of items, each of which may be of
 * a different type, e.g., `[boolean, string]`.
 */
export interface TupleType<T extends Array<any> = Array<any>> extends
    BaseType<T>
{
    type: 'Tuple';
    members: Array<SchemaType>;
}

/**
 * A node in a Schema used by this marshaller package.
 */
export type SchemaType =
    AnyType |
    BinaryType |
    BooleanType |
    CustomType<any> |
    CollectionType |
    DateType |
    DocumentType<any> |
    HashType |
    ListType |
    MapType |
    NullType |
    NumberType |
    SetType |
    StringType |
    TupleType;

export function isSchemaType(
    arg: any,
    alreadyVisited: Set<any> = new Set()
): arg is SchemaType {
    if (isBaseType(arg)) {
        if (alreadyVisited.has(arg)) {
            return true;
        }

        alreadyVisited.add(arg);
        switch (arg.type) {
            case 'Binary':
            case 'Date':
            case 'String':
                return isKeyableType(arg);
            case 'Custom':
                return isKeyableType(arg)
                    && typeof (arg as CustomType<any>).marshall === 'function'
                    && typeof (arg as CustomType<any>).unmarshall === 'function'
                    && [
                        void 0,
                        'S',
                        'N',
                        'B',
                    ].indexOf((arg as CustomType<any>).attributeType) > -1;
            case 'Document':
                return isDocumentType(arg, alreadyVisited);
            case 'List':
            case 'Map':
                return isSchemaType(
                    (arg as ListType).memberType,
                    alreadyVisited
                );
            case 'Number':
                return isKeyableType(arg) && ['boolean', 'undefined']
                    .indexOf(typeof (arg as NumberType).versionAttribute) > -1;
            case 'Tuple':
                return isTupleType(arg, alreadyVisited);
            default:
                return true;
        }
    }

    return false;
}

function isDocumentType(
    arg: BaseType,
    alreadyVisited: Set<any>
): arg is DocumentType {
    const {valueConstructor, members} = arg as DocumentType;
    if (!members || typeof members !== 'object') {
        return false;
    }

    for (const key of Object.keys(members)) {
        if (!isSchemaType(members[key], alreadyVisited)) {
            return false;
        }
    }

    return ['function', 'undefined',].indexOf(typeof valueConstructor) > -1;
}

function isTupleType(
    arg: BaseType,
    alreadyVisited: Set<any>
): arg is TupleType {
    const {members} = arg as TupleType;
    if (!Array.isArray(members)) {
        return false;
    }

    for (const member of members) {
        if (!isSchemaType(member, alreadyVisited)) {
            return false;
        }
    }

    return true;
}