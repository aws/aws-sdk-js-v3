import { AssociateTagOptionWithResourceInput } from "../shapes/AssociateTagOptionWithResourceInput";
import { AssociateTagOptionWithResourceOutput } from "../shapes/AssociateTagOptionWithResourceOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateTagOptionWithResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateTagOptionWithResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateTagOptionWithResourceInput
  },
  output: {
    shape: AssociateTagOptionWithResourceOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DuplicateResourceException
    },
    {
      shape: InvalidStateException
    }
  ]
};
