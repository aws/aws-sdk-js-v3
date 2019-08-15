import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIntegrationInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId", "httpMethod"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    resourceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_id"
    },
    httpMethod: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "http_method"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
