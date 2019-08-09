import { GetConferenceProviderInput } from "./GetConferenceProviderInput";
import { GetConferenceProviderOutput } from "./GetConferenceProviderOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConferenceProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConferenceProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConferenceProviderInput
  },
  output: {
    shape: GetConferenceProviderOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
