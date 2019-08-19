import { AssociateAddressInput } from "../shapes/AssociateAddressInput";
import { AssociateAddressOutput } from "../shapes/AssociateAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateAddressInput
  },
  output: {
    shape: AssociateAddressOutput
  },
  errors: []
};
