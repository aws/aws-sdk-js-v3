import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { CodeValidationException } from "./CodeValidationException";
import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyTagsException } from "./TooManyTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationInput
  },
  output: {
    shape: CreateApplicationOutput
  },
  errors: [
    {
      shape: CodeValidationException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
