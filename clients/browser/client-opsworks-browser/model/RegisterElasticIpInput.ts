import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterElasticIpInput: _Structure_ = {
  type: "structure",
  required: ["ElasticIp", "StackId"],
  members: {
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
