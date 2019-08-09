import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTypeInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "definition", "format"],
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
        type: "string"
      }
    },
    format: {
      shape: {
        type: "string"
      }
    }
  }
};
