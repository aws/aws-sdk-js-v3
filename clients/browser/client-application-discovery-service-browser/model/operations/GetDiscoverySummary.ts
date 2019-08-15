import { GetDiscoverySummaryInput } from "../shapes/GetDiscoverySummaryInput";
import { GetDiscoverySummaryOutput } from "../shapes/GetDiscoverySummaryOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDiscoverySummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDiscoverySummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDiscoverySummaryInput
  },
  output: {
    shape: GetDiscoverySummaryOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
