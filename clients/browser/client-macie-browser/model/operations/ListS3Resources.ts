import { ListS3ResourcesInput } from "../shapes/ListS3ResourcesInput";
import { ListS3ResourcesOutput } from "../shapes/ListS3ResourcesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
