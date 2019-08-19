import { GetIndexingConfigurationInput } from "../shapes/GetIndexingConfigurationInput";
import { GetIndexingConfigurationOutput } from "../shapes/GetIndexingConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
