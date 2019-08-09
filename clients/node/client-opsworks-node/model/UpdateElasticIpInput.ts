import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateElasticIpInput: _Structure_ = {
  type: "structure",
  required: ["ElasticIp"],
  members: {
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
