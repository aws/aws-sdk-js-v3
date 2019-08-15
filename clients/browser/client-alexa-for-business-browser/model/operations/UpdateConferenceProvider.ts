import { UpdateConferenceProviderInput } from "../shapes/UpdateConferenceProviderInput";
import { UpdateConferenceProviderOutput } from "../shapes/UpdateConferenceProviderOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConferenceProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConferenceProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConferenceProviderInput
  },
  output: {
    shape: UpdateConferenceProviderOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
