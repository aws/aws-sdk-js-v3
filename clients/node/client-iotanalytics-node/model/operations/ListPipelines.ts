import { ListPipelinesInput } from "../shapes/ListPipelinesInput";
import { ListPipelinesOutput } from "../shapes/ListPipelinesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPipelines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPipelines",
  http: {
    method: "GET",
    requestUri: "/pipelines"
  },
  input: {
    shape: ListPipelinesInput
  },
  output: {
    shape: ListPipelinesOutput
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
