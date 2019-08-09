import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetConfigurationRequest: _Structure_ = {
  type: "structure",
  required: ["OfferingId"],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    OfferingId: {
      shape: {
        type: "string"
      }
    }
  }
};
