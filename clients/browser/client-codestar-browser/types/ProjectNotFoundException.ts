import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified AWS CodeStar project was not found.</p>
 */
export interface ProjectNotFoundException
  extends __ServiceException__<_ProjectNotFoundExceptionDetails> {
  name: "ProjectNotFoundException";
}

export interface _ProjectNotFoundExceptionDetails {}
