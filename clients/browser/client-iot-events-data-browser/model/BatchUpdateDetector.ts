import { BatchUpdateDetectorInput } from "./BatchUpdateDetectorInput";
import { BatchUpdateDetectorOutput } from "./BatchUpdateDetectorOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchUpdateDetector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUpdateDetector",
  http: {
    method: "POST",
    requestUri: "/detectors"
  },
  input: {
    shape: BatchUpdateDetectorInput
  },
  output: {
    shape: BatchUpdateDetectorOutput
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
