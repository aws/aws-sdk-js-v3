import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS CodeBuild is not available in the specified region.</p>
 */
export interface CodeBuildNotInServiceRegionException
  extends __ServiceException__<_CodeBuildNotInServiceRegionExceptionDetails> {
  name: "CodeBuildNotInServiceRegionException";
}

export interface _CodeBuildNotInServiceRegionExceptionDetails {}
