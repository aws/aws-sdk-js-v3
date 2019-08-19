import { _UnmarshalledCmafPackage } from "./_CmafPackage";
import { _UnmarshalledDashPackage } from "./_DashPackage";
import { _UnmarshalledHlsPackage } from "./_HlsPackage";
import { _UnmarshalledMssPackage } from "./_MssPackage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePackagingConfigurationOutput shape
 */
export interface CreatePackagingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: _UnmarshalledCmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _UnmarshalledDashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _UnmarshalledHlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: _UnmarshalledMssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
