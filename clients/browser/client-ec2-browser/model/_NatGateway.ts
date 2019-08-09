import { _NatGatewayAddressList } from "./_NatGatewayAddressList";
import { _ProvisionedBandwidth } from "./_ProvisionedBandwidth";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NatGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    DeleteTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "deleteTime"
    },
    FailureCode: {
      shape: {
        type: "string"
      },
      locationName: "failureCode"
    },
    FailureMessage: {
      shape: {
        type: "string"
      },
      locationName: "failureMessage"
    },
    NatGatewayAddresses: {
      shape: _NatGatewayAddressList,
      locationName: "natGatewayAddressSet"
    },
    NatGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "natGatewayId"
    },
    ProvisionedBandwidth: {
      shape: _ProvisionedBandwidth,
      locationName: "provisionedBandwidth"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
