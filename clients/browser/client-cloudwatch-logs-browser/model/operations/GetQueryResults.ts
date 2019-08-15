import { GetQueryResultsInput } from "../shapes/GetQueryResultsInput";
import { GetQueryResultsOutput } from "../shapes/GetQueryResultsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetQueryResults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueryResults",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQueryResultsInput
  },
  output: {
    shape: GetQueryResultsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
