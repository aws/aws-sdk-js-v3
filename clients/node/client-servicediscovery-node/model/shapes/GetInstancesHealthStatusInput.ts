import { _InstanceIdList } from "./_InstanceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstancesHealthStatusInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId"],
  members: {
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    Instances: {
      shape: _InstanceIdList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
