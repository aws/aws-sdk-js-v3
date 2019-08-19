import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomerGatewayInput: _Structure_ = {
  type: "structure",
  required: ["BgpAsn", "PublicIp", "Type"],
  members: {
    BgpAsn: {
      shape: {
        type: "integer"
      }
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "IpAddress"
    },
    Type: {
      shape: {
        type: "string"
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
