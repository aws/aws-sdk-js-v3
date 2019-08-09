import { CreateCustomActionTypeInput } from "./CreateCustomActionTypeInput";
import { CreateCustomActionTypeOutput } from "./CreateCustomActionTypeOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
