import { UpdateVPCEConfigurationInput } from "./UpdateVPCEConfigurationInput";
import { UpdateVPCEConfigurationOutput } from "./UpdateVPCEConfigurationOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { ServiceAccountException } from "./ServiceAccountException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
