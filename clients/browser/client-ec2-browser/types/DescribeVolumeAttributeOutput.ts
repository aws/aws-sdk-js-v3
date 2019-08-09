import { _UnmarshalledAttributeBooleanValue } from "./_AttributeBooleanValue";
import { _UnmarshalledProductCode } from "./_ProductCode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeVolumeAttribute.</p>
 */
export interface DescribeVolumeAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   */
  AutoEnableIO?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
