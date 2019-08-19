import { UpdateIndexingConfigurationInput } from "../shapes/UpdateIndexingConfigurationInput";
import { UpdateIndexingConfigurationOutput } from "../shapes/UpdateIndexingConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIndexingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIndexingConfiguration",
  http: {
    method: "POST",
    requestUri: "/indexing/config"
  },
  input: {
    shape: UpdateIndexingConfigurationInput
  },
  output: {
    shape: UpdateIndexingConfigurationOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
