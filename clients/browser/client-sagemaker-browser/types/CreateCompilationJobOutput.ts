import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCompilationJobOutput shape
 */
export interface CreateCompilationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns the following data in JSON format:</p> <ul> <li> <p> <code>CompilationJobArn</code>: The Amazon Resource Name (ARN) of the compiled job.</p> </li> </ul>
   */
  CompilationJobArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
