import {
    HttpTrait,
    ServiceMetadata,
    SupportedSignatureVersion,
    XmlNamespace,
} from '@aws-sdk/types';

/**
 * Represents a definition of an API, complete with rich typing, validation
 * metadata, and documentation. Matches the '.service-2.json' or '.normal.json'
 * formats used by the AWS SDKs.
 *
 * This type exists to allow the TreeModel (cf ../TreeModel/*) to be built from
 * JSON files with a known structure. The runtime SDK should only rely on types
 * defined in the @aws-sdk/types package, and the code generator should rely on the
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

/**
 * @internal
 */
export interface Blob extends ShapeDef {
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
export interface Byte extends ShapeDef {
    readonly type: 'byte';
    min?: number;
    max?: number;
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
export interface Double extends ShapeDef {
    readonly type: 'double';
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Float extends ShapeDef {
    readonly type: 'float';
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Integer extends ShapeDef {
    readonly type: 'integer';
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Long extends ShapeDef {
    readonly type: 'long';
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Short extends ShapeDef {
    readonly type: 'short';
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface String extends ShapeDef {
    readonly type: 'string';
    min?: number;
    max?: number;
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
export interface List extends ShapeDef {
    readonly type: 'list';
    member: Member;
    flattened?: boolean;
    min?: number;
    max?: number;
}

/**
 * @internal
 */
export interface Map extends ShapeDef {
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
