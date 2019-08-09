import { ListDetectorModelVersionsInput } from "./ListDetectorModelVersionsInput";
import { ListDetectorModelVersionsOutput } from "./ListDetectorModelVersionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
