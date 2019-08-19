import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCoreDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["CoreDefinitionId", "CoreDefinitionVersionId"],
  members: {
    CoreDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CoreDefinitionId"
    },
    CoreDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CoreDefinitionVersionId"
    }
  }
};
