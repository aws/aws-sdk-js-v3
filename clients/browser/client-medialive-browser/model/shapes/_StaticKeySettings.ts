import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaticKeySettings: _Structure_ = {
  type: "structure",
  required: ["StaticKeyValue"],
  members: {
    KeyProviderServer: {
      shape: _InputLocation,
      locationName: "keyProviderServer"
    },
    StaticKeyValue: {
      shape: {
        type: "string",
        min: 32
      },
      locationName: "staticKeyValue"
    }
  }
};
