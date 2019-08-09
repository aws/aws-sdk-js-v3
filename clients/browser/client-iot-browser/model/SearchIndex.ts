import { SearchIndexInput } from "./SearchIndexInput";
import { SearchIndexOutput } from "./SearchIndexOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidQueryException } from "./InvalidQueryException";
import { IndexNotReadyException } from "./IndexNotReadyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
