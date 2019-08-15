import { BatchUpdateDetectorInput } from "../shapes/BatchUpdateDetectorInput";
import { BatchUpdateDetectorOutput } from "../shapes/BatchUpdateDetectorOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
