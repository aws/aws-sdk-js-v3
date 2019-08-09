import { GetTypeInput } from "./GetTypeInput";
import { GetTypeOutput } from "./GetTypeOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetType",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/types/{typeName}"
  },
  input: {
    shape: GetTypeInput
  },
  output: {
    shape: GetTypeOutput
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
    }
  ]
};
