import { TagRoleInput } from "./TagRoleInput";
import { TagRoleOutput } from "./TagRoleOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagRoleInput
  },
  output: {
    shape: TagRoleOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
