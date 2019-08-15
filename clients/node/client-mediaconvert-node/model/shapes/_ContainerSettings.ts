import { _F4vSettings } from "./_F4vSettings";
import { _M2tsSettings } from "./_M2tsSettings";
import { _M3u8Settings } from "./_M3u8Settings";
import { _MovSettings } from "./_MovSettings";
import { _Mp4Settings } from "./_Mp4Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Container: {
      shape: {
        type: "string"
      },
      locationName: "container"
    },
    F4vSettings: {
      shape: _F4vSettings,
      locationName: "f4vSettings"
    },
    M2tsSettings: {
      shape: _M2tsSettings,
      locationName: "m2tsSettings"
    },
    M3u8Settings: {
      shape: _M3u8Settings,
      locationName: "m3u8Settings"
    },
    MovSettings: {
      shape: _MovSettings,
      locationName: "movSettings"
    },
    Mp4Settings: {
      shape: _Mp4Settings,
      locationName: "mp4Settings"
    }
  }
};
