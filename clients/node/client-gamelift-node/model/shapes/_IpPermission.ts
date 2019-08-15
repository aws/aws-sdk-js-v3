import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpPermission: _Structure_ = {
  type: "structure",
  required: ["FromPort", "ToPort", "IpRange", "Protocol"],
  members: {
    FromPort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ToPort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    IpRange: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    }
  }
};
