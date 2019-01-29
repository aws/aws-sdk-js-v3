/**
 * Custom attibute dimension
 */
export interface _AttributeDimension {
    /**
     * The type of dimension:
     *
     * INCLUSIVE - Endpoints that match the criteria are included in the segment.
     *
     * EXCLUSIVE - Endpoints that match the criteria are excluded from the segment.
     */
    AttributeType?: 'INCLUSIVE'|'EXCLUSIVE'|string;

    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: Array<string>|Iterable<string>;
}

export interface _UnmarshalledAttributeDimension extends _AttributeDimension {
    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: Array<string>;
}