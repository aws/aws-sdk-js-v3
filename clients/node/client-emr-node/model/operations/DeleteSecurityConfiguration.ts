import { DeleteSecurityConfigurationInput } from "../shapes/DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "../shapes/DeleteSecurityConfigurationOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSecurityConfigurationInput
  },
  output: {
    shape: DeleteSecurityConfigurationOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
