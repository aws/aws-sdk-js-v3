import {
  _ArchiveGroupSettings,
  _UnmarshalledArchiveGroupSettings
} from "./_ArchiveGroupSettings";
import {
  _FrameCaptureGroupSettings,
  _UnmarshalledFrameCaptureGroupSettings
} from "./_FrameCaptureGroupSettings";
import {
  _HlsGroupSettings,
  _UnmarshalledHlsGroupSettings
} from "./_HlsGroupSettings";
import {
  _MediaPackageGroupSettings,
  _UnmarshalledMediaPackageGroupSettings
} from "./_MediaPackageGroupSettings";
import {
  _MsSmoothGroupSettings,
  _UnmarshalledMsSmoothGroupSettings
} from "./_MsSmoothGroupSettings";
import {
  _RtmpGroupSettings,
  _UnmarshalledRtmpGroupSettings
} from "./_RtmpGroupSettings";
import {
  _UdpGroupSettings,
  _UnmarshalledUdpGroupSettings
} from "./_UdpGroupSettings";

/**
 * Output Group Settings
 */
export interface _OutputGroupSettings {
  /**
   * Archive Group Settings
   */
  ArchiveGroupSettings?: _ArchiveGroupSettings;

  /**
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: _FrameCaptureGroupSettings;

  /**
   * Hls Group Settings
   */
  HlsGroupSettings?: _HlsGroupSettings;

  /**
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: _MediaPackageGroupSettings;

  /**
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: _MsSmoothGroupSettings;

  /**
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: _RtmpGroupSettings;

  /**
   * Udp Group Settings
   */
  UdpGroupSettings?: _UdpGroupSettings;
}

export interface _UnmarshalledOutputGroupSettings extends _OutputGroupSettings {
  /**
   * Archive Group Settings
   */
  ArchiveGroupSettings?: _UnmarshalledArchiveGroupSettings;

  /**
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: _UnmarshalledFrameCaptureGroupSettings;

  /**
   * Hls Group Settings
   */
  HlsGroupSettings?: _UnmarshalledHlsGroupSettings;

  /**
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: _UnmarshalledMediaPackageGroupSettings;

  /**
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: _UnmarshalledMsSmoothGroupSettings;

  /**
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: _UnmarshalledRtmpGroupSettings;

  /**
   * Udp Group Settings
   */
  UdpGroupSettings?: _UnmarshalledUdpGroupSettings;
}
