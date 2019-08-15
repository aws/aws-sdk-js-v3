import { CreateApplicationInput } from "../shapes/CreateApplicationInput";
import { CreateApplicationOutput } from "../shapes/CreateApplicationOutput";
import { CodeValidationException } from "../shapes/CodeValidationException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
