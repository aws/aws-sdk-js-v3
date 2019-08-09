import { ListDetectorsInput } from "./ListDetectorsInput";
import { ListDetectorsOutput } from "./ListDetectorsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDetectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDetectors",
  http: {
    method: "GET",
    requestUri: "/detectors/{detectorModelName}"
  },
  input: {
    shape: ListDetectorsInput
  },
  output: {
    shape: ListDetectorsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
