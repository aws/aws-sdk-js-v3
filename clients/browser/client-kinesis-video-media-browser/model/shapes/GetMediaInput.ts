import { _StartSelector } from "./_StartSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMediaInput: _Structure_ = {
  type: "structure",
  required: ["StartSelector"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartSelector: {
      shape: _StartSelector
    }
  }
};
