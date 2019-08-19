import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStageInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "stageName"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    stageName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "stage_name"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
