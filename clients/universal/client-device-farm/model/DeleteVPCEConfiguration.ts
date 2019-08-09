import { DeleteVPCEConfigurationInput } from "./DeleteVPCEConfigurationInput";
import { DeleteVPCEConfigurationOutput } from "./DeleteVPCEConfigurationOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { ServiceAccountException } from "./ServiceAccountException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
