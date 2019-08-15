import { _BurninDestinationSettings } from "./_BurninDestinationSettings";
import { _DvbSubDestinationSettings } from "./_DvbSubDestinationSettings";
import { _EmbeddedDestinationSettings } from "./_EmbeddedDestinationSettings";
import { _SccDestinationSettings } from "./_SccDestinationSettings";
import { _TeletextDestinationSettings } from "./_TeletextDestinationSettings";
import { _TtmlDestinationSettings } from "./_TtmlDestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BurninDestinationSettings: {
      shape: _BurninDestinationSettings,
      locationName: "burninDestinationSettings"
    },
    DestinationType: {
      shape: {
        type: "string"
      },
      locationName: "destinationType"
    },
    DvbSubDestinationSettings: {
      shape: _DvbSubDestinationSettings,
      locationName: "dvbSubDestinationSettings"
    },
    EmbeddedDestinationSettings: {
      shape: _EmbeddedDestinationSettings,
      locationName: "embeddedDestinationSettings"
    },
    SccDestinationSettings: {
      shape: _SccDestinationSettings,
      locationName: "sccDestinationSettings"
    },
    TeletextDestinationSettings: {
      shape: _TeletextDestinationSettings,
      locationName: "teletextDestinationSettings"
    },
    TtmlDestinationSettings: {
      shape: _TtmlDestinationSettings,
      locationName: "ttmlDestinationSettings"
    }
  }
};
