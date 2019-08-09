import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportTransitGatewayRoutesOutput shape
 */
export interface ExportTransitGatewayRoutesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The URL of the exported file in Amazon S3. For example, s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
