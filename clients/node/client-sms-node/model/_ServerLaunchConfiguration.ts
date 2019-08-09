import { _Server } from "./_Server";
import { _UserData } from "./_UserData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerLaunchConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    server: {
      shape: _Server
    },
    logicalId: {
      shape: {
        type: "string"
      }
    },
    vpc: {
      shape: {
        type: "string"
      }
    },
    subnet: {
      shape: {
        type: "string"
      }
    },
    securityGroup: {
      shape: {
        type: "string"
      }
    },
    ec2KeyName: {
      shape: {
        type: "string"
      }
    },
    userData: {
      shape: _UserData
    },
    instanceType: {
      shape: {
        type: "string"
      }
    },
    associatePublicIpAddress: {
      shape: {
        type: "boolean"
      }
    }
  }
};
