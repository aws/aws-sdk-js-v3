import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSchemaCreationInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "definition"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    definition: {
      shape: {
        type: "blob"
      }
    }
  }
};
