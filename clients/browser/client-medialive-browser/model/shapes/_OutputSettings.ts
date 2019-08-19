import { _ArchiveOutputSettings } from "./_ArchiveOutputSettings";
import { _FrameCaptureOutputSettings } from "./_FrameCaptureOutputSettings";
import { _HlsOutputSettings } from "./_HlsOutputSettings";
import { _MediaPackageOutputSettings } from "./_MediaPackageOutputSettings";
import { _MsSmoothOutputSettings } from "./_MsSmoothOutputSettings";
import { _RtmpOutputSettings } from "./_RtmpOutputSettings";
import { _UdpOutputSettings } from "./_UdpOutputSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ArchiveOutputSettings: {
      shape: _ArchiveOutputSettings,
      locationName: "archiveOutputSettings"
    },
    FrameCaptureOutputSettings: {
      shape: _FrameCaptureOutputSettings,
      locationName: "frameCaptureOutputSettings"
    },
    HlsOutputSettings: {
      shape: _HlsOutputSettings,
      locationName: "hlsOutputSettings"
    },
    MediaPackageOutputSettings: {
      shape: _MediaPackageOutputSettings,
      locationName: "mediaPackageOutputSettings"
    },
    MsSmoothOutputSettings: {
      shape: _MsSmoothOutputSettings,
      locationName: "msSmoothOutputSettings"
    },
    RtmpOutputSettings: {
      shape: _RtmpOutputSettings,
      locationName: "rtmpOutputSettings"
    },
    UdpOutputSettings: {
      shape: _UdpOutputSettings,
      locationName: "udpOutputSettings"
    }
  }
};
