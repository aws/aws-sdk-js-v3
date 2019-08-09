import { _VpcPeeringAuthorization } from "./_VpcPeeringAuthorization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcPeeringAuthorizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcPeeringAuthorization: {
      shape: _VpcPeeringAuthorization
    }
  }
};
