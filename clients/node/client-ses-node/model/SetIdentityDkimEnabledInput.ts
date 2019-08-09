import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityDkimEnabledInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "DkimEnabled"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    DkimEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
