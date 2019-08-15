import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfaceAttributeInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId"],
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
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    }
  }
};
