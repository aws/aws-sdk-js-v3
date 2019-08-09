import { DeleteConferenceProviderInput } from "./DeleteConferenceProviderInput";
import { DeleteConferenceProviderOutput } from "./DeleteConferenceProviderOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConferenceProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConferenceProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConferenceProviderInput
  },
  output: {
    shape: DeleteConferenceProviderOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
