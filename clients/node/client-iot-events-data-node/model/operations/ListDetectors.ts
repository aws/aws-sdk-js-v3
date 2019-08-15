import { ListDetectorsInput } from "../shapes/ListDetectorsInput";
import { ListDetectorsOutput } from "../shapes/ListDetectorsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
