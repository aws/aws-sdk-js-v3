import { SearchIndexInput } from "../shapes/SearchIndexInput";
import { SearchIndexOutput } from "../shapes/SearchIndexOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidQueryException } from "../shapes/InvalidQueryException";
import { IndexNotReadyException } from "../shapes/IndexNotReadyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchIndex",
  http: {
    method: "POST",
    requestUri: "/indices/search"
  },
  input: {
    shape: SearchIndexInput
  },
  output: {
    shape: SearchIndexOutput
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
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidQueryException
    },
    {
      shape: IndexNotReadyException
    }
  ]
};
