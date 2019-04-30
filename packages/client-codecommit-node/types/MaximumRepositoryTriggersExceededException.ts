import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 */
export interface MaximumRepositoryTriggersExceededException
  extends __ServiceException__<
    _MaximumRepositoryTriggersExceededExceptionDetails
  > {
  name: "MaximumRepositoryTriggersExceededException";
}

export interface _MaximumRepositoryTriggersExceededExceptionDetails {}
