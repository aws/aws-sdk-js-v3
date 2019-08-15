import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateElasticIpInput: _Structure_ = {
  type: "structure",
  required: ["ElasticIp"],
  members: {
    ElasticIp: {
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
