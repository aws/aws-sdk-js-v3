import { ListConferenceProvidersInput } from "../shapes/ListConferenceProvidersInput";
import { ListConferenceProvidersOutput } from "../shapes/ListConferenceProvidersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConferenceProviders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConferenceProviders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListConferenceProvidersInput
  },
  output: {
    shape: ListConferenceProvidersOutput
  },
  errors: []
};
