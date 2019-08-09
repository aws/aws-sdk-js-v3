import { ListEventSourcesInput } from "./ListEventSourcesInput";
import { ListEventSourcesOutput } from "./ListEventSourcesOutput";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEventSources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEventSources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEventSourcesInput
  },
  output: {
    shape: ListEventSourcesOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
