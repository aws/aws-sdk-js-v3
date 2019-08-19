import { SearchEntitiesInput } from "../shapes/SearchEntitiesInput";
import { SearchEntitiesOutput } from "../shapes/SearchEntitiesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
