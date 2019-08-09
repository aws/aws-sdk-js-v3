import { _AribSourceSettings } from "./_AribSourceSettings";
import { _DvbSubSourceSettings } from "./_DvbSubSourceSettings";
import { _EmbeddedSourceSettings } from "./_EmbeddedSourceSettings";
import { _Scte20SourceSettings } from "./_Scte20SourceSettings";
import { _Scte27SourceSettings } from "./_Scte27SourceSettings";
import { _TeletextSourceSettings } from "./_TeletextSourceSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionSelectorSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AribSourceSettings: {
      shape: _AribSourceSettings,
      locationName: "aribSourceSettings"
    },
    DvbSubSourceSettings: {
      shape: _DvbSubSourceSettings,
      locationName: "dvbSubSourceSettings"
    },
    EmbeddedSourceSettings: {
      shape: _EmbeddedSourceSettings,
      locationName: "embeddedSourceSettings"
    },
    Scte20SourceSettings: {
      shape: _Scte20SourceSettings,
      locationName: "scte20SourceSettings"
    },
    Scte27SourceSettings: {
      shape: _Scte27SourceSettings,
      locationName: "scte27SourceSettings"
    },
    TeletextSourceSettings: {
      shape: _TeletextSourceSettings,
      locationName: "teletextSourceSettings"
    }
  }
};
