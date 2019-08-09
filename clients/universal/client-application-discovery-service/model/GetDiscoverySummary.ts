import { GetDiscoverySummaryInput } from "./GetDiscoverySummaryInput";
import { GetDiscoverySummaryOutput } from "./GetDiscoverySummaryOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
