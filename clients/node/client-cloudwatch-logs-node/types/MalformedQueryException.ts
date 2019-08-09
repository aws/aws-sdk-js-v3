import { _UnmarshalledQueryCompileError } from "./_QueryCompileError";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The query string is not valid. Details about this error are displayed in a <code>QueryCompileError</code> object. For more information, see .</p> <p>For more information about valid query syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
 */
export interface MalformedQueryException
  extends __ServiceException__<_MalformedQueryExceptionDetails> {
  name: "MalformedQueryException";
}

export interface _MalformedQueryExceptionDetails {
  /**
   * <p>Reserved.</p>
   */
  queryCompileError?: _UnmarshalledQueryCompileError;
}
