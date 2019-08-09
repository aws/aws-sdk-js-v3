import { _UnmarshalledCodeRepositorySummary } from "./_CodeRepositorySummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCodeRepositoriesOutput shape
 */
export interface ListCodeRepositoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following values for the repository: </p> <ul> <li> <p>Name</p> </li> <li> <p>Amazon Resource Name (ARN)</p> </li> <li> <p>Creation time</p> </li> <li> <p>Last modified time</p> </li> <li> <p>Configuration information, including the URL location of the repository and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.</p> </li> </ul>
   */
  CodeRepositorySummaryList: Array<_UnmarshalledCodeRepositorySummary>;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of Git repositories, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
