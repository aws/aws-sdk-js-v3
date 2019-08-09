import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFleetOutput shape
 */
export interface CreateFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The list of all tags added to the fleet.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
