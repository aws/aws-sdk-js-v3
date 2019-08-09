import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRepositoryTriggersInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
