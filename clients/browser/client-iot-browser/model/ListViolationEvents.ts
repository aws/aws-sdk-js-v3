import { ListViolationEventsInput } from "./ListViolationEventsInput";
import { ListViolationEventsOutput } from "./ListViolationEventsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListViolationEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListViolationEvents",
  http: {
    method: "GET",
    requestUri: "/violation-events"
  },
  input: {
    shape: ListViolationEventsInput
  },
  output: {
    shape: ListViolationEventsOutput
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
    }
  ]
};
