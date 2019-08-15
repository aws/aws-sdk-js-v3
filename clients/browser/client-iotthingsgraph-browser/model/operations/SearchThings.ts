import { SearchThingsInput } from "../shapes/SearchThingsInput";
import { SearchThingsOutput } from "../shapes/SearchThingsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
