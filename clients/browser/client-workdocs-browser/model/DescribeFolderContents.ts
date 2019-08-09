import { DescribeFolderContentsInput } from "./DescribeFolderContentsInput";
import { DescribeFolderContentsOutput } from "./DescribeFolderContentsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
