import { _PeeringConnectionOptionsRequest } from "./_PeeringConnectionOptionsRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcPeeringConnectionOptionsInput: _Structure_ = {
  type: "structure",
  required: ["VpcPeeringConnectionId"],
  members: {
    AccepterPeeringConnectionOptions: {
      shape: _PeeringConnectionOptionsRequest
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    RequesterPeeringConnectionOptions: {
      shape: _PeeringConnectionOptionsRequest
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
