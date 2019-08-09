import { _VpcEndpoint } from "./_VpcEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcEndpoint: {
      shape: _VpcEndpoint,
      locationName: "vpcEndpoint"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    }
  }
};
