import { ListResourcesForTagOptionInput } from "../shapes/ListResourcesForTagOptionInput";
import { ListResourcesForTagOptionOutput } from "../shapes/ListResourcesForTagOptionOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourcesForTagOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourcesForTagOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourcesForTagOptionInput
  },
  output: {
    shape: ListResourcesForTagOptionOutput
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
    }
  ]
};
