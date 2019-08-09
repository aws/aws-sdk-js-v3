import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOptionGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "OptionGroupName",
    "EngineName",
    "MajorEngineVersion",
    "OptionGroupDescription"
  ],
  members: {
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    EngineName: {
      shape: {
        type: "string"
      }
    },
    MajorEngineVersion: {
      shape: {
        type: "string"
      }
    },
    OptionGroupDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
