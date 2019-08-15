import { ListCreatedArtifactsInput } from "../shapes/ListCreatedArtifactsInput";
import { ListCreatedArtifactsOutput } from "../shapes/ListCreatedArtifactsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCreatedArtifacts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCreatedArtifacts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCreatedArtifactsInput
  },
  output: {
    shape: ListCreatedArtifactsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
