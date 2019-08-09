import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Both an IAM user ARN and an IAM session ARN were included in the request. Use only one ARN type.</p>
 */
export interface MultipleIamArnsProvidedException
  extends __ServiceException__<_MultipleIamArnsProvidedExceptionDetails> {
  name: "MultipleIamArnsProvidedException";
}

export interface _MultipleIamArnsProvidedExceptionDetails {}
