import { _UnmarshalledNetworkInterfaceAttachment } from "./_NetworkInterfaceAttachment";
import { _UnmarshalledAttributeValue } from "./_AttributeValue";
import { _UnmarshalledGroupIdentifier } from "./_GroupIdentifier";
import { _UnmarshalledAttributeBooleanValue } from "./_AttributeBooleanValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   */
  Attachment?: _UnmarshalledNetworkInterfaceAttachment;

  /**
   * <p>The description of the network interface.</p>
   */
  Description?: _UnmarshalledAttributeValue;

  /**
   * <p>The security groups associated with the network interface.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: _UnmarshalledAttributeBooleanValue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
