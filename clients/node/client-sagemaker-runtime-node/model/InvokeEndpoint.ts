import { InvokeEndpointInput } from "./InvokeEndpointInput";
import { InvokeEndpointOutput } from "./InvokeEndpointOutput";
import { InternalFailure } from "./InternalFailure";
import { ServiceUnavailable } from "./ServiceUnavailable";
import { ValidationError } from "./ValidationError";
import { ModelError } from "./ModelError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
