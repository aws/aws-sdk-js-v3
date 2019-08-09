import { SearchFlowExecutionsInput } from "./SearchFlowExecutionsInput";
import { SearchFlowExecutionsOutput } from "./SearchFlowExecutionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
