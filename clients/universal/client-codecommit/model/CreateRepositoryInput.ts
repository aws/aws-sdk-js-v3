import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    repositoryDescription: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagsMap
    }
  }
};
