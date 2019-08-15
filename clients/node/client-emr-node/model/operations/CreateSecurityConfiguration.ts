import { CreateSecurityConfigurationInput } from "../shapes/CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "../shapes/CreateSecurityConfigurationOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSecurityConfigurationInput
  },
  output: {
    shape: CreateSecurityConfigurationOutput
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
