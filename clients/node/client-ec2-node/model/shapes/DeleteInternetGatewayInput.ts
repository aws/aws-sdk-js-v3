import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInternetGatewayInput: _Structure_ = {
  type: "structure",
  required: ["InternetGatewayId"],
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
    }
  }
};
