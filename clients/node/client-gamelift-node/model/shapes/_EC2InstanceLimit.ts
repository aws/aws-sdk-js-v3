import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2InstanceLimit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2InstanceType: {
      shape: {
        type: "string"
      }
    },
    CurrentInstances: {
      shape: {
        type: "integer"
      }
    },
    InstanceLimit: {
      shape: {
        type: "integer"
      }
    }
  }
};
