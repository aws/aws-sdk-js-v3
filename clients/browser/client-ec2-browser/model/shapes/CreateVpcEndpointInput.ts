import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointInput: _Structure_ = {
  type: "structure",
  required: ["VpcId", "ServiceName"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VpcEndpointType: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    PolicyDocument: {
      shape: {
        type: "string"
      }
    },
    RouteTableIds: {
      shape: _ValueStringList,
      locationName: "RouteTableId"
    },
    SubnetIds: {
      shape: _ValueStringList,
      locationName: "SubnetId"
    },
    SecurityGroupIds: {
      shape: _ValueStringList,
      locationName: "SecurityGroupId"
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    PrivateDnsEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
