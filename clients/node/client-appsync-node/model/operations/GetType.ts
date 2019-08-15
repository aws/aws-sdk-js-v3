import { GetTypeInput } from "../shapes/GetTypeInput";
import { GetTypeOutput } from "../shapes/GetTypeOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
