import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    OfferingId: {
      shape: {
        type: "string"
      },
      locationName: "offeringId"
    }
  }
};
