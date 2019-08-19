import { CreateTagOptionInput } from "../shapes/CreateTagOptionInput";
import { CreateTagOptionOutput } from "../shapes/CreateTagOptionOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTagOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTagOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTagOptionInput
  },
  output: {
    shape: CreateTagOptionOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: DuplicateResourceException
    },
    {
      shape: LimitExceededException
    }
  ]
};
