import { SearchSystemInstancesInput } from "./SearchSystemInstancesInput";
import { SearchSystemInstancesOutput } from "./SearchSystemInstancesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
