import { UpdateVPCEConfigurationInput } from "../shapes/UpdateVPCEConfigurationInput";
import { UpdateVPCEConfigurationOutput } from "../shapes/UpdateVPCEConfigurationOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVPCEConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVPCEConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateVPCEConfigurationInput
  },
  output: {
    shape: UpdateVPCEConfigurationOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceAccountException
    },
    {
      shape: InvalidOperationException
    }
  ]
};
