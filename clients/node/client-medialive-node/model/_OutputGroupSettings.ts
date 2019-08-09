import { _ArchiveGroupSettings } from "./_ArchiveGroupSettings";
import { _FrameCaptureGroupSettings } from "./_FrameCaptureGroupSettings";
import { _HlsGroupSettings } from "./_HlsGroupSettings";
import { _MediaPackageGroupSettings } from "./_MediaPackageGroupSettings";
import { _MsSmoothGroupSettings } from "./_MsSmoothGroupSettings";
import { _RtmpGroupSettings } from "./_RtmpGroupSettings";
import { _UdpGroupSettings } from "./_UdpGroupSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ArchiveGroupSettings: {
      shape: _ArchiveGroupSettings,
      locationName: "archiveGroupSettings"
    },
    FrameCaptureGroupSettings: {
      shape: _FrameCaptureGroupSettings,
      locationName: "frameCaptureGroupSettings"
    },
    HlsGroupSettings: {
      shape: _HlsGroupSettings,
      locationName: "hlsGroupSettings"
    },
    MediaPackageGroupSettings: {
      shape: _MediaPackageGroupSettings,
      locationName: "mediaPackageGroupSettings"
    },
    MsSmoothGroupSettings: {
      shape: _MsSmoothGroupSettings,
      locationName: "msSmoothGroupSettings"
    },
    RtmpGroupSettings: {
      shape: _RtmpGroupSettings,
      locationName: "rtmpGroupSettings"
    },
    UdpGroupSettings: {
      shape: _UdpGroupSettings,
      locationName: "udpGroupSettings"
    }
  }
};
