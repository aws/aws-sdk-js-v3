import { AssociateTagOptionWithResourceInput } from "./AssociateTagOptionWithResourceInput";
import { AssociateTagOptionWithResourceOutput } from "./AssociateTagOptionWithResourceOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
