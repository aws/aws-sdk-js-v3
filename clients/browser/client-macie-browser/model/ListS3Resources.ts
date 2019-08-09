import { ListS3ResourcesInput } from "./ListS3ResourcesInput";
import { ListS3ResourcesOutput } from "./ListS3ResourcesOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListS3Resources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListS3Resources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListS3ResourcesInput
  },
  output: {
    shape: ListS3ResourcesOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalException
    }
  ]
};
