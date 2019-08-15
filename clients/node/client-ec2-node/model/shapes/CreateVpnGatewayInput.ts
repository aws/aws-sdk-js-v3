import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpnGatewayInput: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    AmazonSideAsn: {
      shape: {
        type: "integer"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
