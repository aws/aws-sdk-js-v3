import { _tagList } from "./_tagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["name", "uniqueId"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    uniqueId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _tagList
    }
  }
};
