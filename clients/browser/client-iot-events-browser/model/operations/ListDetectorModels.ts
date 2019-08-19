import { ListDetectorModelsInput } from "../shapes/ListDetectorModelsInput";
import { ListDetectorModelsOutput } from "../shapes/ListDetectorModelsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDetectorModels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDetectorModels",
  http: {
    method: "GET",
    requestUri: "/detector-models"
  },
  input: {
    shape: ListDetectorModelsInput
  },
  output: {
    shape: ListDetectorModelsOutput
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
    }
  ]
};
