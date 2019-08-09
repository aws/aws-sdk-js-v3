import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTypeInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "typeName", "format"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    typeName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "typeName"
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
