import {
  _ArchiveOutputSettings,
  _UnmarshalledArchiveOutputSettings
} from "./_ArchiveOutputSettings";
import {
  _FrameCaptureOutputSettings,
  _UnmarshalledFrameCaptureOutputSettings
} from "./_FrameCaptureOutputSettings";
import {
  _HlsOutputSettings,
  _UnmarshalledHlsOutputSettings
} from "./_HlsOutputSettings";
import {
  _MediaPackageOutputSettings,
  _UnmarshalledMediaPackageOutputSettings
} from "./_MediaPackageOutputSettings";
import {
  _MsSmoothOutputSettings,
  _UnmarshalledMsSmoothOutputSettings
} from "./_MsSmoothOutputSettings";
import {
  _RtmpOutputSettings,
  _UnmarshalledRtmpOutputSettings
} from "./_RtmpOutputSettings";
import {
  _UdpOutputSettings,
  _UnmarshalledUdpOutputSettings
} from "./_UdpOutputSettings";

/**
 * Output Settings
 */
export interface _OutputSettings {
  /**
   * Archive Output Settings
   */
  ArchiveOutputSettings?: _ArchiveOutputSettings;

  /**
   * Frame Capture Output Settings
   */
  FrameCaptureOutputSettings?: _FrameCaptureOutputSettings;

  /**
   * Hls Output Settings
   */
  HlsOutputSettings?: _HlsOutputSettings;

  /**
   * Media Package Output Settings
   */
  MediaPackageOutputSettings?: _MediaPackageOutputSettings;

  /**
   * Ms Smooth Output Settings
   */
  MsSmoothOutputSettings?: _MsSmoothOutputSettings;

  /**
   * Rtmp Output Settings
   */
  RtmpOutputSettings?: _RtmpOutputSettings;

  /**
   * Udp Output Settings
   */
  UdpOutputSettings?: _UdpOutputSettings;
}

export interface _UnmarshalledOutputSettings extends _OutputSettings {
  /**
   * Archive Output Settings
   */
  ArchiveOutputSettings?: _UnmarshalledArchiveOutputSettings;

  /**
   * Frame Capture Output Settings
   */
  FrameCaptureOutputSettings?: _UnmarshalledFrameCaptureOutputSettings;

  /**
   * Hls Output Settings
   */
  HlsOutputSettings?: _UnmarshalledHlsOutputSettings;

  /**
   * Media Package Output Settings
   */
  MediaPackageOutputSettings?: _UnmarshalledMediaPackageOutputSettings;

  /**
   * Ms Smooth Output Settings
   */
  MsSmoothOutputSettings?: _UnmarshalledMsSmoothOutputSettings;

  /**
   * Rtmp Output Settings
   */
  RtmpOutputSettings?: _UnmarshalledRtmpOutputSettings;

  /**
   * Udp Output Settings
   */
  UdpOutputSettings?: _UnmarshalledUdpOutputSettings;
}
