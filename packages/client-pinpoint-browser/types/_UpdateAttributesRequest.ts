/**
 * Update attributes request
 */
export interface _UpdateAttributesRequest {
    /**
     * The GLOB wildcard for removing the attributes in the application
     */
    Blacklist?: Array<string>|Iterable<string>;
}

export interface _UnmarshalledUpdateAttributesRequest extends _UpdateAttributesRequest {
    /**
     * The GLOB wildcard for removing the attributes in the application
     */
    Blacklist?: Array<string>;
}