import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["ResourceDefinitionVersionId", "ResourceDefinitionId"],
  members: {
    ResourceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionId"
    },
    ResourceDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionVersionId"
    }
  }
};
