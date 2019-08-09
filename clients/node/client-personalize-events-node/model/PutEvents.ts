import { PutEventsInput } from "./PutEventsInput";
import { PutEventsOutput } from "./PutEventsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEvents",
  http: {
    method: "POST",
    requestUri: "/events"
  },
  input: {
    shape: PutEventsInput
  },
  output: {
    shape: PutEventsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
