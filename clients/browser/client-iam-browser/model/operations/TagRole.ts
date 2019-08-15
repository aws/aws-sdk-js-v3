import { TagRoleInput } from "../shapes/TagRoleInput";
import { TagRoleOutput } from "../shapes/TagRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
