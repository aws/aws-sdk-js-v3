import { ListFlowExecutionMessagesInput } from "./ListFlowExecutionMessagesInput";
import { ListFlowExecutionMessagesOutput } from "./ListFlowExecutionMessagesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
