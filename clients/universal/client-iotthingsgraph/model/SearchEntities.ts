import { SearchEntitiesInput } from "./SearchEntitiesInput";
import { SearchEntitiesOutput } from "./SearchEntitiesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchEntities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchEntities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchEntitiesInput
  },
  output: {
    shape: SearchEntitiesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
