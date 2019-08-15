import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticIpStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
