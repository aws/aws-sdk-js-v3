import { CreateCustomMetadataInput } from "./CreateCustomMetadataInput";
import { CreateCustomMetadataOutput } from "./CreateCustomMetadataOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { CustomMetadataLimitExceededException } from "./CustomMetadataLimitExceededException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCustomMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCustomMetadata",
  http: {
    method: "PUT",
    requestUri: "/api/v1/resources/{ResourceId}/customMetadata"
  },
  input: {
    shape: CreateCustomMetadataInput
  },
  output: {
    shape: CreateCustomMetadataOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: CustomMetadataLimitExceededException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
