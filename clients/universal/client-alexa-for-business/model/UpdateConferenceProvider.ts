import { UpdateConferenceProviderInput } from "./UpdateConferenceProviderInput";
import { UpdateConferenceProviderOutput } from "./UpdateConferenceProviderOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
