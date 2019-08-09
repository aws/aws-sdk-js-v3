import { ListResourcesForTagOptionInput } from "./ListResourcesForTagOptionInput";
import { ListResourcesForTagOptionOutput } from "./ListResourcesForTagOptionOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
