import { CreateCustomMetadataInput } from "../shapes/CreateCustomMetadataInput";
import { CreateCustomMetadataOutput } from "../shapes/CreateCustomMetadataOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { CustomMetadataLimitExceededException } from "../shapes/CustomMetadataLimitExceededException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
