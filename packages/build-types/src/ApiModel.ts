import {
    HttpTrait,
    ServiceMetadata,
    SupportedSignatureVersion,
    XmlNamespace,
} from '@aws/types';

/**
 * Represents a definition of an API, complete with rich typing, validation
 * metadata, and documentation. Matches the '.service-2.json' or '.normal.json'
 * formats used by the AWS SDKs.
 *
 * This type exists to allow the TreeModel (cf ../TreeModel/*) to be built from
 * JSON files with a known structure. The runtime SDK should only rely on types
 * defined in the @aws/types package, and the code generator should rely on the
 * TreeModel's types.
 *
 * If you're using this model or its shape or operation types to do anything
 * other than build a TreeModel from a JSON document, you should probably
 * reconsider your approach.
 *
 * @internal
 */
export interface ApiModel {
    metadata: ServiceMetadata,
    operations: OperationMap,
    shapes: ShapeMap,
    documentation?: string,
}

/**
 * Represents a definition of an API operation as defined in the
 * '.service-2.json' format used by the AWS SDKs.
 *
 * @internal
 */
export interface Operation {
    deprecated?: boolean;
    documentation?: string;
    documentationUrl?: string;
    errors?: Array<StructureMember>;
    http: HttpTrait;
    input?: StructureMember;
    name: string;
    output?: StructureMember;
    authtype?: SupportedSignatureVersion;
}

/**
 * @internal
 */
export type OperationMap = {[key: string]: Operation};

/**
 * @internal
 */
export type Type = 'boolean'|'byte'|'timestamp'|'character'|'double'|'float'|'integer'|'long'|'short'|'string'|'blob'|'list'|'map'|'structure';

/**
 * Represents a definition of a data shape as defined in the '.service-2.json'
 * format used by the AWS SDKs.
 *
 * @internal
 */
export interface ShapeDef {
    readonly type: Type;
    sensitive?: boolean;
    documentation?: string;
    deprecated?: boolean;
}

export interface LengthConstrained {
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Blob extends ShapeDef, LengthConstrained {
    readonly type: 'blob';
    streaming?: boolean;
}

/**
 * @internal
 */
export interface Boolean extends ShapeDef {
    readonly type: 'boolean';
}

/**
 * @internal
 */
export interface Byte extends ShapeDef, LengthConstrained {
    readonly type: 'byte';
}

/**
 * @internal
 */
export interface Character extends ShapeDef {
    readonly type: 'character';
}

/**
 * @internal
 */
export interface Double extends ShapeDef, LengthConstrained {
    readonly type: 'double';
}

/**
 * @internal
 */
export interface Float extends ShapeDef, LengthConstrained {
    readonly type: 'float';
}

/**
 * @internal
 */
export interface Integer extends ShapeDef, LengthConstrained {
    readonly type: 'integer';
}

/**
 * @internal
 */
export interface Long extends ShapeDef, LengthConstrained {
    readonly type: 'long';
}

/**
 * @internal
 */
export interface Short extends ShapeDef, LengthConstrained {
    readonly type: 'short';
}

/**
 * @internal
 */
export interface String extends ShapeDef, LengthConstrained {
    readonly type: 'string';
    pattern?: string;
    enum?: Array<string>;
    jsonValue?: boolean;
    idempotencyToken?: boolean;
}

/**
 * @internal
 */
export interface Timestamp extends ShapeDef {
    readonly type: 'timestamp';
    timestampFormat?: string;
}

/**
 * @internal
 */
export interface Member {
    documentation?: string;
    shape: string;
    flattened?: boolean;
    locationName?: string;
    xmlAttribute?: boolean;
}

/**
 * @internal
 */
export type MemberLocation = 'header'|'headers'|'uri'|'querystring';

/**
 * @internal
 */
export interface StructureMember extends Member {
    location?: MemberLocation;
    xmlNamespace?: XmlNamespace|string;
    streaming?: boolean;
}

/**
 * @internal
 */
export interface List extends ShapeDef, LengthConstrained {
    readonly type: 'list';
    member: Member;
    flattened?: boolean;
}

/**
 * @internal
 */
export interface Map extends ShapeDef, LengthConstrained {
    readonly type: 'map';
    flattened?: boolean;
    key: Member;
    value: Member;
}

/**
 * @internal
 */
export interface Error {
    code?: string;
    httpStatusCode?: number;
    senderFault?: boolean;
}

/**
 * @internal
 */
export interface Structure extends ShapeDef {
    readonly type: 'structure';
    error?: Error;
    exception?: boolean;
    fault?: boolean;
    members: {[key: string]: StructureMember}
    required?: Array<string>;
    payload?: string;
    topLevel?: 'input'|'output';
}

/**
 * @internal
 */
export type Shape = Blob|Boolean|Byte|Character|Double|Float|Integer|List|Long|Map|Short|String|Structure|Timestamp;

/**
 * @internal
 */
export type ComplexShape = List|Map|Structure;

/**
 * @internal
 */
export type ShapeMap = {[key: string]: Shape};
