import { UpdateS3ResourcesInput } from "../shapes/UpdateS3ResourcesInput";
import { UpdateS3ResourcesOutput } from "../shapes/UpdateS3ResourcesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateS3Resources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateS3Resources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateS3ResourcesInput
  },
  output: {
    shape: UpdateS3ResourcesOutput
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
