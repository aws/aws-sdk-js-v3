import { _AssociationStatus } from "./_AssociationStatus";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetNetwork: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    TargetNetworkId: {
      shape: {
        type: "string"
      },
      locationName: "targetNetworkId"
    },
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Status: {
      shape: _AssociationStatus,
      locationName: "status"
    },
    SecurityGroups: {
      shape: _ValueStringList,
      locationName: "securityGroups"
    }
  }
};
