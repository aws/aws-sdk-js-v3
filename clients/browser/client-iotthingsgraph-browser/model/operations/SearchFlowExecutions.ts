import { SearchFlowExecutionsInput } from "../shapes/SearchFlowExecutionsInput";
import { SearchFlowExecutionsOutput } from "../shapes/SearchFlowExecutionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchFlowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchFlowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchFlowExecutionsInput
  },
  output: {
    shape: SearchFlowExecutionsOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
