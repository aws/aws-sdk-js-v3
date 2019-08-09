import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachInternetGatewayInput: _Structure_ = {
  type: "structure",
  required: ["InternetGatewayId", "VpcId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InternetGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "internetGatewayId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
