import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 25.</p>
 */
export interface MaximumRepositoryNamesExceededException
  extends __ServiceException__<
    _MaximumRepositoryNamesExceededExceptionDetails
  > {
  name: "MaximumRepositoryNamesExceededException";
}

export interface _MaximumRepositoryNamesExceededExceptionDetails {}
