import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The project creation request was valid, but a nonspecific exception or error occurred during project creation. The project could not be created in AWS CodeStar.</p>
 */
export interface ProjectCreationFailedException
  extends __ServiceException__<_ProjectCreationFailedExceptionDetails> {
  name: "ProjectCreationFailedException";
}

export interface _ProjectCreationFailedExceptionDetails {}
