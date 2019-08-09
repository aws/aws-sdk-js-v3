import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {}
