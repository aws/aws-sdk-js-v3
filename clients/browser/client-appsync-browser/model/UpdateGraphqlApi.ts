import { UpdateGraphqlApiInput } from "./UpdateGraphqlApiInput";
import { UpdateGraphqlApiOutput } from "./UpdateGraphqlApiOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGraphqlApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGraphqlApi",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}"
  },
  input: {
    shape: UpdateGraphqlApiInput
  },
  output: {
    shape: UpdateGraphqlApiOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
