import { ListFacesInput } from "../shapes/ListFacesInput";
import { ListFacesOutput } from "../shapes/ListFacesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListFacesInput
  },
  output: {
    shape: ListFacesOutput
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
      shape: InvalidPaginationTokenException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
