import { GetQueryResultsInput } from "../shapes/GetQueryResultsInput";
import { GetQueryResultsOutput } from "../shapes/GetQueryResultsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
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
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
