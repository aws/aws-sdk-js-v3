import { GetResourceMetricsInput } from "./GetResourceMetricsInput";
import { GetResourceMetricsOutput } from "./GetResourceMetricsOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceError } from "./InternalServiceError";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
