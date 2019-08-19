import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationRevisionOutput shape
 */
export interface DescribeConfigurationRevisionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the configuration.</p>
   *
   */
  Arn?: string;

  /**
   *
   *             <p>The time when the configuration was created.</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *             <p>The description of the configuration.</p>
   *
   */
  Description?: string;

  /**
   *
   *             <p>The revision number.</p>
   *
   */
  Revision?: number;

  /**
   *
   *             <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   *
   */
  ServerProperties?: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
