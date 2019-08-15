import { PutLoggingOptionsInput } from "../shapes/PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "../shapes/PutLoggingOptionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
