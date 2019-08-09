import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceNotFoundException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ResourceNotFoundException",
  exceptionCode: "ResourceNotFoundException"
};
