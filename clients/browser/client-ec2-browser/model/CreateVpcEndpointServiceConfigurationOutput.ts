import { _ServiceConfiguration } from "./_ServiceConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointServiceConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceConfiguration: {
      shape: _ServiceConfiguration,
      locationName: "serviceConfiguration"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    }
  }
};
