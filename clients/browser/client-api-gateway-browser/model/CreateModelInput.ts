import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "name", "contentType"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    }
  }
};
