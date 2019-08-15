import { ListApiKeysInput } from "../shapes/ListApiKeysInput";
import { ListApiKeysOutput } from "../shapes/ListApiKeysOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApiKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApiKeys",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/apikeys"
  },
  input: {
    shape: ListApiKeysInput
  },
  output: {
    shape: ListApiKeysOutput
  },
  errors: [
    {
      shape: BadRequestException
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
