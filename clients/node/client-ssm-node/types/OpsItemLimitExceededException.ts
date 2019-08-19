import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request caused OpsItems to exceed one or more limits. For information about OpsItem limits, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
 */
export interface OpsItemLimitExceededException
  extends __ServiceException__<_OpsItemLimitExceededExceptionDetails> {
  name: "OpsItemLimitExceededException";
}

export interface _OpsItemLimitExceededExceptionDetails {
  /**
   * _OpsItemParameterNamesList shape
   */
  ResourceTypes?: Array<string>;

  /**
   * _Integer shape
   */
  Limit?: number;

  /**
   * _String shape
   */
  LimitType?: string;

  /**
   * _String shape
   */
  Message?: string;
}
