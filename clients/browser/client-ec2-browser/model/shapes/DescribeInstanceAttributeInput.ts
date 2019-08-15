import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceAttributeInput: _Structure_ = {
  type: "structure",
  required: ["Attribute", "InstanceId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      },
      locationName: "attribute"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    }
  }
};
