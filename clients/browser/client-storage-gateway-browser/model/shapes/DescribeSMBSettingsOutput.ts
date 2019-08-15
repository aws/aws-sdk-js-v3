import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSMBSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SMBGuestPasswordSet: {
      shape: {
        type: "boolean"
      }
    },
    SMBSecurityStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
