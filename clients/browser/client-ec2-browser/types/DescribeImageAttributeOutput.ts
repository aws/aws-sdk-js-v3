import { _UnmarshalledBlockDeviceMapping } from "./_BlockDeviceMapping";
import { _UnmarshalledLaunchPermission } from "./_LaunchPermission";
import { _UnmarshalledProductCode } from "./_ProductCode";
import { _UnmarshalledAttributeValue } from "./_AttributeValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes an image attribute.</p>
 */
export interface DescribeImageAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledBlockDeviceMapping>;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The launch permissions.</p>
   */
  LaunchPermissions?: Array<_UnmarshalledLaunchPermission>;

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>A description for the AMI.</p>
   */
  Description?: _UnmarshalledAttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: _UnmarshalledAttributeValue;

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: _UnmarshalledAttributeValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: _UnmarshalledAttributeValue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
