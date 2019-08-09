import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. </p>
 */
export interface ExportBundleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> URL which contains the custom-generated SDK and tool packages used to integrate the client mobile app or web app with the AWS resources created by the AWS Mobile Hub project. </p>
   */
  downloadUrl?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
