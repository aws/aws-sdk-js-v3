import { UpdateTagOptionInput } from "../shapes/UpdateTagOptionInput";
import { UpdateTagOptionOutput } from "../shapes/UpdateTagOptionOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTagOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTagOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTagOptionInput
  },
  output: {
    shape: UpdateTagOptionOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DuplicateResourceException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
