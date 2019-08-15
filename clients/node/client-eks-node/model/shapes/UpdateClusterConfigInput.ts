import { _VpcConfigRequest } from "./_VpcConfigRequest";
import { _Logging } from "./_Logging";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClusterConfigInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "name"
    },
    resourcesVpcConfig: {
      shape: _VpcConfigRequest
    },
    logging: {
      shape: _Logging
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    }
  }
};
