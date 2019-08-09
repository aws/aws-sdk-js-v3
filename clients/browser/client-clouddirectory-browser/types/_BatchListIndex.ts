import {
  _ObjectAttributeRange,
  _UnmarshalledObjectAttributeRange
} from "./_ObjectAttributeRange";
import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchListIndex {
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?:
    | Array<_ObjectAttributeRange>
    | Iterable<_ObjectAttributeRange>;

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: _ObjectReference;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListIndex extends _BatchListIndex {
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: Array<_UnmarshalledObjectAttributeRange>;

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: _UnmarshalledObjectReference;
}
