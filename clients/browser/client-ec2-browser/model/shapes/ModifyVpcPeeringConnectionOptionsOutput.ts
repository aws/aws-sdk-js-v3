import { _PeeringConnectionOptions } from "./_PeeringConnectionOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcPeeringConnectionOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccepterPeeringConnectionOptions: {
      shape: _PeeringConnectionOptions,
      locationName: "accepterPeeringConnectionOptions"
    },
    RequesterPeeringConnectionOptions: {
      shape: _PeeringConnectionOptions,
      locationName: "requesterPeeringConnectionOptions"
    }
  }
};
