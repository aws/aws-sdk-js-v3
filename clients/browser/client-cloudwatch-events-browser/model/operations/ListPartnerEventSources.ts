import { ListPartnerEventSourcesInput } from "../shapes/ListPartnerEventSourcesInput";
import { ListPartnerEventSourcesOutput } from "../shapes/ListPartnerEventSourcesOutput";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
