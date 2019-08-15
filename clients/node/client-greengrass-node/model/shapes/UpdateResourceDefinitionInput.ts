import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResourceDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["ResourceDefinitionId"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ResourceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionId"
    }
  }
};
