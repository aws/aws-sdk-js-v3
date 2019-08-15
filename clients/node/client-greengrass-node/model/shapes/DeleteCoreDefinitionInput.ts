import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCoreDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["CoreDefinitionId"],
  members: {
    CoreDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CoreDefinitionId"
    }
  }
};
