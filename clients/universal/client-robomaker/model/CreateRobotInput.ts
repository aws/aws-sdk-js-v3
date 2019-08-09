import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRobotInput: _Structure_ = {
  type: "structure",
  required: ["name", "architecture", "greengrassGroupId"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    architecture: {
      shape: {
        type: "string"
      }
    },
    greengrassGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagMap
    }
  }
};
