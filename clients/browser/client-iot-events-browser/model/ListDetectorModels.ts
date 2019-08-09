import { ListDetectorModelsInput } from "./ListDetectorModelsInput";
import { ListDetectorModelsOutput } from "./ListDetectorModelsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
