import { GetResourceMetricsInput } from "../shapes/GetResourceMetricsInput";
import { GetResourceMetricsOutput } from "../shapes/GetResourceMetricsOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourceMetrics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceMetrics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResourceMetricsInput
  },
  output: {
    shape: GetResourceMetricsOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
