import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetNetworkInterfaceAttributeInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId"],
  members: {
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
    },
    SourceDestCheck: {
      shape: {
        type: "string"
      },
      locationName: "sourceDestCheck"
    }
  }
};
