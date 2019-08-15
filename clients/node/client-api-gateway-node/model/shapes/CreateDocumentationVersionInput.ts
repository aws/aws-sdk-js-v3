import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentationVersionInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "documentationVersion"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    documentationVersion: {
      shape: {
        type: "string"
      }
    },
    stageName: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
