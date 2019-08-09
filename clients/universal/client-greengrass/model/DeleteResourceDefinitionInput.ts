import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["ResourceDefinitionId"],
  members: {
    ResourceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionId"
    }
  }
};
