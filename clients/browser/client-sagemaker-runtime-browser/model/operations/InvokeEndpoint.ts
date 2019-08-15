import { InvokeEndpointInput } from "../shapes/InvokeEndpointInput";
import { InvokeEndpointOutput } from "../shapes/InvokeEndpointOutput";
import { InternalFailure } from "../shapes/InternalFailure";
import { ServiceUnavailable } from "../shapes/ServiceUnavailable";
import { ValidationError } from "../shapes/ValidationError";
import { ModelError } from "../shapes/ModelError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InvokeEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InvokeEndpoint",
  http: {
    method: "POST",
    requestUri: "/endpoints/{EndpointName}/invocations"
  },
  input: {
    shape: InvokeEndpointInput
  },
  output: {
    shape: InvokeEndpointOutput
  },
  errors: [
    {
      shape: InternalFailure
    },
    {
      shape: ServiceUnavailable
    },
    {
      shape: ValidationError
    },
    {
      shape: ModelError
    }
  ]
};
