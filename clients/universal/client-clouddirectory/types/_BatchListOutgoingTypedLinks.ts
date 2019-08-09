import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import {
  _TypedLinkAttributeRange,
  _UnmarshalledTypedLinkAttributeRange
} from "./_TypedLinkAttributeRange";
import {
  _TypedLinkSchemaAndFacetName,
  _UnmarshalledTypedLinkSchemaAndFacetName
} from "./_TypedLinkSchemaAndFacetName";

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchListOutgoingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?:
    | Array<_TypedLinkAttributeRange>
    | Iterable<_TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: _TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchListOutgoingTypedLinks
  extends _BatchListOutgoingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: Array<_UnmarshalledTypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: _UnmarshalledTypedLinkSchemaAndFacetName;
}
