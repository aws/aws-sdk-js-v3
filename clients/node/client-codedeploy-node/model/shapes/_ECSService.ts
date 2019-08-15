import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ECSService: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceName: {
      shape: {
        type: "string"
      }
    },
    clusterName: {
      shape: {
        type: "string"
      }
    }
  }
};
