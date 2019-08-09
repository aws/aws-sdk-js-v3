import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterElasticIpInput: _Structure_ = {
  type: "structure",
  required: ["ElasticIp"],
  members: {
    ElasticIp: {
      shape: {
        type: "string"
      }
    }
  }
};
