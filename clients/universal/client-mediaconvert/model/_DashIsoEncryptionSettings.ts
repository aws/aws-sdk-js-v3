import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashIsoEncryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlaybackDeviceCompatibility: {
      shape: {
        type: "string"
      },
      locationName: "playbackDeviceCompatibility"
    },
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
