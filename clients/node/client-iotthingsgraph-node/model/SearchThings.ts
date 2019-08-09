import { SearchThingsInput } from "./SearchThingsInput";
import { SearchThingsOutput } from "./SearchThingsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchThings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchThings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchThingsInput
  },
  output: {
    shape: SearchThingsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
