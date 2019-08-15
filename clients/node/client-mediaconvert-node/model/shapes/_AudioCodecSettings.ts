import { _AacSettings } from "./_AacSettings";
import { _Ac3Settings } from "./_Ac3Settings";
import { _AiffSettings } from "./_AiffSettings";
import { _Eac3AtmosSettings } from "./_Eac3AtmosSettings";
import { _Eac3Settings } from "./_Eac3Settings";
import { _Mp2Settings } from "./_Mp2Settings";
import { _WavSettings } from "./_WavSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioCodecSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AacSettings: {
      shape: _AacSettings,
      locationName: "aacSettings"
    },
    Ac3Settings: {
      shape: _Ac3Settings,
      locationName: "ac3Settings"
    },
    AiffSettings: {
      shape: _AiffSettings,
      locationName: "aiffSettings"
    },
    Codec: {
      shape: {
        type: "string"
      },
      locationName: "codec"
    },
    Eac3AtmosSettings: {
      shape: _Eac3AtmosSettings,
      locationName: "eac3AtmosSettings"
    },
    Eac3Settings: {
      shape: _Eac3Settings,
      locationName: "eac3Settings"
    },
    Mp2Settings: {
      shape: _Mp2Settings,
      locationName: "mp2Settings"
    },
    WavSettings: {
      shape: _WavSettings,
      locationName: "wavSettings"
    }
  }
};
