import { DeleteVPCEConfigurationInput } from "../shapes/DeleteVPCEConfigurationInput";
import { DeleteVPCEConfigurationOutput } from "../shapes/DeleteVPCEConfigurationOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVPCEConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVPCEConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVPCEConfigurationInput
  },
  output: {
    shape: DeleteVPCEConfigurationOutput
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
