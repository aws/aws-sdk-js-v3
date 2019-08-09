import { ListIndicesInput } from "./ListIndicesInput";
import { ListIndicesOutput } from "./ListIndicesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
