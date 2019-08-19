import { _VpcConfigResponse } from "./_VpcConfigResponse";
import { _Logging } from "./_Logging";
import { _Certificate } from "./_Certificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    endpoint: {
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
      shape: _VpcConfigResponse
    },
    logging: {
      shape: _Logging
    },
    status: {
      shape: {
        type: "string"
      }
    },
    certificateAuthority: {
      shape: _Certificate
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    },
    platformVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
