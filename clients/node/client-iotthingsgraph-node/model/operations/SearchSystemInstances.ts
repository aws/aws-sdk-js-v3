import { SearchSystemInstancesInput } from "../shapes/SearchSystemInstancesInput";
import { SearchSystemInstancesOutput } from "../shapes/SearchSystemInstancesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchSystemInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchSystemInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchSystemInstancesInput
  },
  output: {
    shape: SearchSystemInstancesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
