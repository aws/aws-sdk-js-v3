import { DeleteVerifiedEmailAddressInput } from "../shapes/DeleteVerifiedEmailAddressInput";
import { DeleteVerifiedEmailAddressOutput } from "../shapes/DeleteVerifiedEmailAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVerifiedEmailAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVerifiedEmailAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVerifiedEmailAddressInput
  },
  output: {
    shape: DeleteVerifiedEmailAddressOutput
  },
  errors: []
};
