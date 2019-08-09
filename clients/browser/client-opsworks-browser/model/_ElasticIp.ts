import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticIp: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ip: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Domain: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
