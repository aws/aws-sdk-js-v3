import { CreateAppInput } from "./CreateAppInput";
import { CreateAppOutput } from "./CreateAppOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
