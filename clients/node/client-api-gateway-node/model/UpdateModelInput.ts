import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateModelInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "modelName"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    modelName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "model_name"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
