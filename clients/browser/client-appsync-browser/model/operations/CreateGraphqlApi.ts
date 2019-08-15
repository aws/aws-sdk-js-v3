import { CreateGraphqlApiInput } from "../shapes/CreateGraphqlApiInput";
import { CreateGraphqlApiOutput } from "../shapes/CreateGraphqlApiOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ApiLimitExceededException } from "../shapes/ApiLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGraphqlApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGraphqlApi",
  http: {
    method: "POST",
    requestUri: "/v1/apis"
  },
  input: {
    shape: CreateGraphqlApiInput
  },
  output: {
    shape: CreateGraphqlApiOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ApiLimitExceededException
    }
  ]
};
