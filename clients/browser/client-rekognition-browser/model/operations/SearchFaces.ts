import { SearchFacesInput } from "../shapes/SearchFacesInput";
import { SearchFacesOutput } from "../shapes/SearchFacesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchFaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchFaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchFacesInput
  },
  output: {
    shape: SearchFacesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
