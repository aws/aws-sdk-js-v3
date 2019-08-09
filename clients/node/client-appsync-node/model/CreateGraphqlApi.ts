import { CreateGraphqlApiInput } from "./CreateGraphqlApiInput";
import { CreateGraphqlApiOutput } from "./CreateGraphqlApiOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiLimitExceededException } from "./ApiLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
