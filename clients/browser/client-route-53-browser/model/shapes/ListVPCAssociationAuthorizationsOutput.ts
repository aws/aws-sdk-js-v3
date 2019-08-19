import { _VPCs } from "./_VPCs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVPCAssociationAuthorizationsOutput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneId", "VPCs"],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    VPCs: {
      shape: _VPCs
    }
  }
};
