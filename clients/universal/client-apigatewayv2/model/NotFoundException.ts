import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotFoundException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    }
  },
  exceptionType: "NotFoundException"
};
