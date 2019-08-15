import { ListFlowExecutionMessagesInput } from "../shapes/ListFlowExecutionMessagesInput";
import { ListFlowExecutionMessagesOutput } from "../shapes/ListFlowExecutionMessagesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFlowExecutionMessages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFlowExecutionMessages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListFlowExecutionMessagesInput
  },
  output: {
    shape: ListFlowExecutionMessagesOutput
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
