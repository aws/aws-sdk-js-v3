import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartImportTaskInput: _Structure_ = {
  type: "structure",
  required: ["name", "importUrl"],
  members: {
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    importUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
