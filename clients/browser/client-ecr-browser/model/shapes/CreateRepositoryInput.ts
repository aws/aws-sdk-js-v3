import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    tags: {
      shape: _TagList
    },
    imageTagMutability: {
      shape: {
        type: "string"
      }
    }
  }
};
