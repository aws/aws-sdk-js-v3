import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterJobDefinitionOutput shape
 */
export interface RegisterJobDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the job definition.</p>
   */
  jobDefinitionName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job definition. </p>
   */
  jobDefinitionArn: string;

  /**
   * <p>The revision of the job definition.</p>
   */
  revision: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
