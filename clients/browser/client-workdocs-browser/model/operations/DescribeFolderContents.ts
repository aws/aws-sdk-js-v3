import { DescribeFolderContentsInput } from "../shapes/DescribeFolderContentsInput";
import { DescribeFolderContentsOutput } from "../shapes/DescribeFolderContentsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFolderContents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFolderContents",
  http: {
    method: "GET",
    requestUri: "/api/v1/folders/{FolderId}/contents"
  },
  input: {
    shape: DescribeFolderContentsInput
  },
  output: {
    shape: DescribeFolderContentsOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
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
