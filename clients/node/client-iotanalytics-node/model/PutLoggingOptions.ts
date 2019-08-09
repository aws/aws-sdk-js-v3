import { PutLoggingOptionsInput } from "./PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "./PutLoggingOptionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutLoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLoggingOptions",
  http: {
    method: "PUT",
    requestUri: "/logging"
  },
  input: {
    shape: PutLoggingOptionsInput
  },
  output: {
    shape: PutLoggingOptionsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
