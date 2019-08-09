import { ListPartnerEventSourcesInput } from "./ListPartnerEventSourcesInput";
import { ListPartnerEventSourcesOutput } from "./ListPartnerEventSourcesOutput";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPartnerEventSources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPartnerEventSources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPartnerEventSourcesInput
  },
  output: {
    shape: ListPartnerEventSourcesOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
