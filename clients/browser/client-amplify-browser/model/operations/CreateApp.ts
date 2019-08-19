import { CreateAppInput } from "../shapes/CreateAppInput";
import { CreateAppOutput } from "../shapes/CreateAppOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApp",
  http: {
    method: "POST",
    requestUri: "/apps"
  },
  input: {
    shape: CreateAppInput
  },
  output: {
    shape: CreateAppOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
