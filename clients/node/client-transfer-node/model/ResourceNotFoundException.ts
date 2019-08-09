import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceNotFoundException: _Structure_ = {
  type: "structure",
  required: ["Message", "Resource", "ResourceType"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Resource: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ResourceNotFoundException"
};
