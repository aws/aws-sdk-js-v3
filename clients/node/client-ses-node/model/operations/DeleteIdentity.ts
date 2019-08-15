import { DeleteIdentityInput } from "../shapes/DeleteIdentityInput";
import { DeleteIdentityOutput } from "../shapes/DeleteIdentityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIdentityInput
  },
  output: {
    shape: DeleteIdentityOutput,
    resultWrapper: "DeleteIdentityResult"
  },
  errors: []
};
