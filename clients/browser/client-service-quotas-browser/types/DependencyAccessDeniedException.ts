import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 */
export interface DependencyAccessDeniedException
  extends __ServiceException__<_DependencyAccessDeniedExceptionDetails> {
  name: "DependencyAccessDeniedException";
}

export interface _DependencyAccessDeniedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
