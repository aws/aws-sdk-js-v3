import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateChangeSetInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    changesetFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
