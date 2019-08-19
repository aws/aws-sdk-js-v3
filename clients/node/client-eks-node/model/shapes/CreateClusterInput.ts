import { _VpcConfigRequest } from "./_VpcConfigRequest";
import { _Logging } from "./_Logging";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: ["name", "roleArn", "resourcesVpcConfig"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
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
