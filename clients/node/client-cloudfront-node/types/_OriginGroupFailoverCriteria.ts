import { _StatusCodes, _UnmarshalledStatusCodes } from "./_StatusCodes";

/**
 * <p>A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.</p>
 */
export interface _OriginGroupFailoverCriteria {
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.</p>
   */
  StatusCodes: _StatusCodes;
}

export interface _UnmarshalledOriginGroupFailoverCriteria
  extends _OriginGroupFailoverCriteria {
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.</p>
   */
  StatusCodes: _UnmarshalledStatusCodes;
}
