import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateModelPackageOutput shape
 */
export interface CreateModelPackageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
