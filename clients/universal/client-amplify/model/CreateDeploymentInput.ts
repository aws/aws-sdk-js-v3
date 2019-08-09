import { _FileMap } from "./_FileMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["appId", "branchName"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "branchName"
    },
    fileMap: {
      shape: _FileMap
    }
  }
};
