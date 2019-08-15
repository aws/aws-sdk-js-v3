import { GetFolderInput } from "../shapes/GetFolderInput";
import { GetFolderOutput } from "../shapes/GetFolderOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFolder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFolder",
  http: {
    method: "GET",
    requestUri: "/api/v1/folders/{FolderId}"
  },
  input: {
    shape: GetFolderInput
  },
  output: {
    shape: GetFolderOutput
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
      shape: InvalidArgumentException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ProhibitedStateException
    }
  ]
};
