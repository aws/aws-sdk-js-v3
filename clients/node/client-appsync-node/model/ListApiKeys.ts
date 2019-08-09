import { ListApiKeysInput } from "./ListApiKeysInput";
import { ListApiKeysOutput } from "./ListApiKeysOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
