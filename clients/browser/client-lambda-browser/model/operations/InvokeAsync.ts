import { InvokeAsyncInput } from "../shapes/InvokeAsyncInput";
import { InvokeAsyncOutput } from "../shapes/InvokeAsyncOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestContentException } from "../shapes/InvalidRequestContentException";
import { InvalidRuntimeException } from "../shapes/InvalidRuntimeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InvokeAsync: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InvokeAsync",
  http: {
    method: "POST",
    requestUri: "/2014-11-13/functions/{FunctionName}/invoke-async/"
  },
  input: {
    shape: InvokeAsyncInput
  },
  output: {
    shape: InvokeAsyncOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestContentException
    },
    {
      shape: InvalidRuntimeException
    }
  ]
};
