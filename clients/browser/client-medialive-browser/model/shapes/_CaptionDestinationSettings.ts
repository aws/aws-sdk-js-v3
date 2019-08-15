import { _AribDestinationSettings } from "./_AribDestinationSettings";
import { _BurnInDestinationSettings } from "./_BurnInDestinationSettings";
import { _DvbSubDestinationSettings } from "./_DvbSubDestinationSettings";
import { _EmbeddedDestinationSettings } from "./_EmbeddedDestinationSettings";
import { _EmbeddedPlusScte20DestinationSettings } from "./_EmbeddedPlusScte20DestinationSettings";
import { _RtmpCaptionInfoDestinationSettings } from "./_RtmpCaptionInfoDestinationSettings";
import { _Scte20PlusEmbeddedDestinationSettings } from "./_Scte20PlusEmbeddedDestinationSettings";
import { _Scte27DestinationSettings } from "./_Scte27DestinationSettings";
import { _SmpteTtDestinationSettings } from "./_SmpteTtDestinationSettings";
import { _TeletextDestinationSettings } from "./_TeletextDestinationSettings";
import { _TtmlDestinationSettings } from "./_TtmlDestinationSettings";
import { _WebvttDestinationSettings } from "./_WebvttDestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AribDestinationSettings: {
      shape: _AribDestinationSettings,
      locationName: "aribDestinationSettings"
    },
    BurnInDestinationSettings: {
      shape: _BurnInDestinationSettings,
      locationName: "burnInDestinationSettings"
    },
    DvbSubDestinationSettings: {
      shape: _DvbSubDestinationSettings,
      locationName: "dvbSubDestinationSettings"
    },
    EmbeddedDestinationSettings: {
      shape: _EmbeddedDestinationSettings,
      locationName: "embeddedDestinationSettings"
    },
    EmbeddedPlusScte20DestinationSettings: {
      shape: _EmbeddedPlusScte20DestinationSettings,
      locationName: "embeddedPlusScte20DestinationSettings"
    },
    RtmpCaptionInfoDestinationSettings: {
      shape: _RtmpCaptionInfoDestinationSettings,
      locationName: "rtmpCaptionInfoDestinationSettings"
    },
    Scte20PlusEmbeddedDestinationSettings: {
      shape: _Scte20PlusEmbeddedDestinationSettings,
      locationName: "scte20PlusEmbeddedDestinationSettings"
    },
    Scte27DestinationSettings: {
      shape: _Scte27DestinationSettings,
      locationName: "scte27DestinationSettings"
    },
    SmpteTtDestinationSettings: {
      shape: _SmpteTtDestinationSettings,
      locationName: "smpteTtDestinationSettings"
    },
    TeletextDestinationSettings: {
      shape: _TeletextDestinationSettings,
      locationName: "teletextDestinationSettings"
    },
    TtmlDestinationSettings: {
      shape: _TtmlDestinationSettings,
      locationName: "ttmlDestinationSettings"
    },
    WebvttDestinationSettings: {
      shape: _WebvttDestinationSettings,
      locationName: "webvttDestinationSettings"
    }
  }
};
