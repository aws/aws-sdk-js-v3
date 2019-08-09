import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    DeleteElasticIp: {
      shape: {
        type: "boolean"
      }
    },
    DeleteVolumes: {
      shape: {
        type: "boolean"
      }
    }
  }
};
