import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashEncryption: _Structure_ = {
  type: "structure",
  required: ["SpekeKeyProvider"],
  members: {
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
