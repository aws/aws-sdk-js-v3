import {
  _OriginGroupFailoverCriteria,
  _UnmarshalledOriginGroupFailoverCriteria
} from "./_OriginGroupFailoverCriteria";
import {
  _OriginGroupMembers,
  _UnmarshalledOriginGroupMembers
} from "./_OriginGroupMembers";

/**
 * <p>An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.</p>
 */
export interface _OriginGroup {
  /**
   * <p>The origin group's ID.</p>
   */
  Id: string;

  /**
   * <p>A complex type that contains information about the failover criteria for an origin group.</p>
   */
  FailoverCriteria: _OriginGroupFailoverCriteria;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   */
  Members: _OriginGroupMembers;
}

export interface _UnmarshalledOriginGroup extends _OriginGroup {
  /**
   * <p>A complex type that contains information about the failover criteria for an origin group.</p>
   */
  FailoverCriteria: _UnmarshalledOriginGroupFailoverCriteria;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   */
  Members: _UnmarshalledOriginGroupMembers;
}
