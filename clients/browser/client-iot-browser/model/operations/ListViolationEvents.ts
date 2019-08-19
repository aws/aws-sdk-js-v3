import { ListViolationEventsInput } from "../shapes/ListViolationEventsInput";
import { ListViolationEventsOutput } from "../shapes/ListViolationEventsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
