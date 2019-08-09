import { _UnmarshalledNetworkInterface } from "./_NetworkInterface";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeGatewayInformationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>A value that indicates the time zone configured for the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * <p>A value that indicates the operating state of the gateway.</p>
   */
  GatewayState?: string;

  /**
   * <p>A <a>NetworkInterface</a> array that contains descriptions of the gateway network interfaces.</p>
   */
  GatewayNetworkInterfaces?: Array<_UnmarshalledNetworkInterface>;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * <p>The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.</p>
   */
  NextUpdateAvailabilityDate?: string;

  /**
   * <p>The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response.</p>
   */
  LastSoftwareUpdate?: string;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * <p>A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The configuration settings for the virtual private cloud (VPC) endpoint for your gateway. </p>
   */
  VPCEndpoint?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
