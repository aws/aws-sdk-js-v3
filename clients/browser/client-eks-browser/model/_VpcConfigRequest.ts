import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcConfigRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    subnetIds: {
      shape: _StringList
    },
    securityGroupIds: {
      shape: _StringList
    },
    endpointPublicAccess: {
      shape: {
        type: "boolean"
      }
    },
    endpointPrivateAccess: {
      shape: {
        type: "boolean"
      }
    }
  }
};
