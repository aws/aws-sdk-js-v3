import { InvokeAsyncInput } from "./InvokeAsyncInput";
import { InvokeAsyncOutput } from "./InvokeAsyncOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestContentException } from "./InvalidRequestContentException";
import { InvalidRuntimeException } from "./InvalidRuntimeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
