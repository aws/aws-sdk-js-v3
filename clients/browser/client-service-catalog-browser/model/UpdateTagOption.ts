import { UpdateTagOptionInput } from "./UpdateTagOptionInput";
import { UpdateTagOptionOutput } from "./UpdateTagOptionOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
