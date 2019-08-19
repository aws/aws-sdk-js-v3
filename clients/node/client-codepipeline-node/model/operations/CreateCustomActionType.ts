import { CreateCustomActionTypeInput } from "../shapes/CreateCustomActionTypeInput";
import { CreateCustomActionTypeOutput } from "../shapes/CreateCustomActionTypeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidTagsException } from "../shapes/InvalidTagsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCustomActionType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCustomActionType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCustomActionTypeInput
  },
  output: {
    shape: CreateCustomActionTypeOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InvalidTagsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
