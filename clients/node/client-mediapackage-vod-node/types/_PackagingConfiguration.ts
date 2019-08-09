import { _CmafPackage, _UnmarshalledCmafPackage } from "./_CmafPackage";
import { _DashPackage, _UnmarshalledDashPackage } from "./_DashPackage";
import { _HlsPackage, _UnmarshalledHlsPackage } from "./_HlsPackage";
import { _MssPackage, _UnmarshalledMssPackage } from "./_MssPackage";

/**
 * A MediaPackage VOD PackagingConfiguration resource.
 */
export interface _PackagingConfiguration {
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: _CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: _MssPackage;

  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;
}

export interface _UnmarshalledPackagingConfiguration
  extends _PackagingConfiguration {
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
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: _UnmarshalledMssPackage;
}
