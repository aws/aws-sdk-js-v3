import { UpdateIndexingConfigurationInput } from "./UpdateIndexingConfigurationInput";
import { UpdateIndexingConfigurationOutput } from "./UpdateIndexingConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
