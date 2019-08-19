import {
  _ConstraintSummary,
  _UnmarshalledConstraintSummary
} from "./_ConstraintSummary";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Summary information about a product path for a user.</p>
 */
export interface _LaunchPathSummary {
  /**
   * <p>The identifier of the product path.</p>
   */
  Id?: string;

  /**
   * <p>The constraints on the portfolio-product relationship.</p>
   */
  ConstraintSummaries?:
    | Array<_ConstraintSummary>
    | Iterable<_ConstraintSummary>;

  /**
   * <p>The tags associated with this product path.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The name of the portfolio to which the user was assigned.</p>
   */
  Name?: string;
}

export interface _UnmarshalledLaunchPathSummary extends _LaunchPathSummary {
  /**
   * <p>The constraints on the portfolio-product relationship.</p>
   */
  ConstraintSummaries?: Array<_UnmarshalledConstraintSummary>;

  /**
   * <p>The tags associated with this product path.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
