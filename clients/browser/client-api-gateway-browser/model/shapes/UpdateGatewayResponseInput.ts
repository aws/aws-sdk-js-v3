import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGatewayResponseInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "responseType"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    responseType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "response_type"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
