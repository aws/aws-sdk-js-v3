import { PutLoggingOptionsInput } from "./PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "./PutLoggingOptionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ResourceInUseException } from "./ResourceInUseException";
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
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
