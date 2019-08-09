import { _VpcPeeringConnectionVpcInfo } from "./_VpcPeeringConnectionVpcInfo";
import { _VpcPeeringConnectionStateReason } from "./_VpcPeeringConnectionStateReason";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringConnection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccepterVpcInfo: {
      shape: _VpcPeeringConnectionVpcInfo,
      locationName: "accepterVpcInfo"
    },
    ExpirationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "expirationTime"
    },
    RequesterVpcInfo: {
      shape: _VpcPeeringConnectionVpcInfo,
      locationName: "requesterVpcInfo"
    },
    Status: {
      shape: _VpcPeeringConnectionStateReason,
      locationName: "status"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
