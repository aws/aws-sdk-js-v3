import { GetOpsSummaryInput } from "../shapes/GetOpsSummaryInput";
import { GetOpsSummaryOutput } from "../shapes/GetOpsSummaryOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidAggregatorException } from "../shapes/InvalidAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
