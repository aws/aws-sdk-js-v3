import { _Hosts } from "./_Hosts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const JoinDomainInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "DomainName", "UserName", "Password"],
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
    OrganizationalUnit: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DomainControllers: {
      shape: _Hosts
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
