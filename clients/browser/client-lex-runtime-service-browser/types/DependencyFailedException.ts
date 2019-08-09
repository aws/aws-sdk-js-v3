import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an exception. For example, </p> <ul> <li> <p>If Amazon Lex does not have sufficient permissions to call a Lambda function.</p> </li> <li> <p>If a Lambda function takes longer than 30 seconds to execute.</p> </li> <li> <p>If a fulfillment Lambda function returns a <code>Delegate</code> dialog action without removing any slot values.</p> </li> </ul>
 */
export interface DependencyFailedException
  extends __ServiceException__<_DependencyFailedExceptionDetails> {
  name: "DependencyFailedException";
}

export interface _DependencyFailedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
