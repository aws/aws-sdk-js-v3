import { _ClientVpnAuthorizationRuleStatus } from "./_ClientVpnAuthorizationRuleStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthorizationRule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    AccessAll: {
      shape: {
        type: "boolean"
      },
      locationName: "accessAll"
    },
    DestinationCidr: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidr"
    },
    Status: {
      shape: _ClientVpnAuthorizationRuleStatus,
      locationName: "status"
    }
  }
};
