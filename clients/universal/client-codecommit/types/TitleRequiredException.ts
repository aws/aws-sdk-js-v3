import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A pull request title is required. It cannot be empty or null.</p>
 */
export interface TitleRequiredException
  extends __ServiceException__<_TitleRequiredExceptionDetails> {
  name: "TitleRequiredException";
}

export interface _TitleRequiredExceptionDetails {}
