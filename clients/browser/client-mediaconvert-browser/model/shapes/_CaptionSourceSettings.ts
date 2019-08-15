import { _AncillarySourceSettings } from "./_AncillarySourceSettings";
import { _DvbSubSourceSettings } from "./_DvbSubSourceSettings";
import { _EmbeddedSourceSettings } from "./_EmbeddedSourceSettings";
import { _FileSourceSettings } from "./_FileSourceSettings";
import { _TeletextSourceSettings } from "./_TeletextSourceSettings";
import { _TrackSourceSettings } from "./_TrackSourceSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionSourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AncillarySourceSettings: {
      shape: _AncillarySourceSettings,
      locationName: "ancillarySourceSettings"
    },
    DvbSubSourceSettings: {
      shape: _DvbSubSourceSettings,
      locationName: "dvbSubSourceSettings"
    },
    EmbeddedSourceSettings: {
      shape: _EmbeddedSourceSettings,
      locationName: "embeddedSourceSettings"
    },
    FileSourceSettings: {
      shape: _FileSourceSettings,
      locationName: "fileSourceSettings"
    },
    SourceType: {
      shape: {
        type: "string"
      },
      locationName: "sourceType"
    },
    TeletextSourceSettings: {
      shape: _TeletextSourceSettings,
      locationName: "teletextSourceSettings"
    },
    TrackSourceSettings: {
      shape: _TrackSourceSettings,
      locationName: "trackSourceSettings"
    }
  }
};
