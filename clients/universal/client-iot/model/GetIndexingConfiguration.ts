import { GetIndexingConfigurationInput } from "./GetIndexingConfigurationInput";
import { GetIndexingConfigurationOutput } from "./GetIndexingConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIndexingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIndexingConfiguration",
  http: {
    method: "GET",
    requestUri: "/indexing/config"
  },
  input: {
    shape: GetIndexingConfigurationInput
  },
  output: {
    shape: GetIndexingConfigurationOutput
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
