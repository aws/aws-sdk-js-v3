import { GetOpsSummaryInput } from "./GetOpsSummaryInput";
import { GetOpsSummaryOutput } from "./GetOpsSummaryOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidAggregatorException } from "./InvalidAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetOpsSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOpsSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOpsSummaryInput
  },
  output: {
    shape: GetOpsSummaryOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidTypeNameException
    },
    {
      shape: InvalidAggregatorException
    }
  ]
};
