import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    ExcludeBootVolume: {
      shape: {
        type: "boolean"
      }
    }
  }
};
