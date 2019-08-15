import { ListDetectorModelVersionsInput } from "../shapes/ListDetectorModelVersionsInput";
import { ListDetectorModelVersionsOutput } from "../shapes/ListDetectorModelVersionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDetectorModelVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDetectorModelVersions",
  http: {
    method: "GET",
    requestUri: "/detector-models/{detectorModelName}/versions"
  },
  input: {
    shape: ListDetectorModelVersionsInput
  },
  output: {
    shape: ListDetectorModelVersionsOutput
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
