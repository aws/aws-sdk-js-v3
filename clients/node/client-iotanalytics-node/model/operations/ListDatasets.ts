import { ListDatasetsInput } from "../shapes/ListDatasetsInput";
import { ListDatasetsOutput } from "../shapes/ListDatasetsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasets",
  http: {
    method: "GET",
    requestUri: "/datasets"
  },
  input: {
    shape: ListDatasetsInput
  },
  output: {
    shape: ListDatasetsOutput
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
