import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcEndpointInput: _Structure_ = {
  type: "structure",
  required: ["VpcEndpointId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VpcEndpointId: {
      shape: {
        type: "string"
      }
    },
    ResetPolicy: {
      shape: {
        type: "boolean"
      }
    },
    PolicyDocument: {
      shape: {
        type: "string"
      }
    },
    AddRouteTableIds: {
      shape: _ValueStringList,
      locationName: "AddRouteTableId"
    },
    RemoveRouteTableIds: {
      shape: _ValueStringList,
      locationName: "RemoveRouteTableId"
    },
    AddSubnetIds: {
      shape: _ValueStringList,
      locationName: "AddSubnetId"
    },
    RemoveSubnetIds: {
      shape: _ValueStringList,
      locationName: "RemoveSubnetId"
    },
    AddSecurityGroupIds: {
      shape: _ValueStringList,
      locationName: "AddSecurityGroupId"
    },
    RemoveSecurityGroupIds: {
      shape: _ValueStringList,
      locationName: "RemoveSecurityGroupId"
    },
    PrivateDnsEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
