import { ListCreatedArtifactsInput } from "./ListCreatedArtifactsInput";
import { ListCreatedArtifactsOutput } from "./ListCreatedArtifactsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
