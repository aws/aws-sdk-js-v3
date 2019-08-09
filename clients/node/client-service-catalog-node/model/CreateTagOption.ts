import { CreateTagOptionInput } from "./CreateTagOptionInput";
import { CreateTagOptionOutput } from "./CreateTagOptionOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
