import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceExportDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    TargetEnvironment: {
      shape: {
        type: "string"
      },
      locationName: "targetEnvironment"
    }
  }
};
