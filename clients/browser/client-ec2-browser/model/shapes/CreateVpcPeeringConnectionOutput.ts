import { _VpcPeeringConnection } from "./_VpcPeeringConnection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcPeeringConnectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcPeeringConnection: {
      shape: _VpcPeeringConnection,
      locationName: "vpcPeeringConnection"
    }
  }
};
