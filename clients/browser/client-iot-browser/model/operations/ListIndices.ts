import { ListIndicesInput } from "../shapes/ListIndicesInput";
import { ListIndicesOutput } from "../shapes/ListIndicesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIndices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIndices",
  http: {
    method: "GET",
    requestUri: "/indices"
  },
  input: {
    shape: ListIndicesInput
  },
  output: {
    shape: ListIndicesOutput
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
