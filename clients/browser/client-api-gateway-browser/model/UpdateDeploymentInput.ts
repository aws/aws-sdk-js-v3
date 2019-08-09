import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "deploymentId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    deploymentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deployment_id"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
