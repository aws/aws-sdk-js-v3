import { DisassociateAddressInput } from "./DisassociateAddressInput";
import { DisassociateAddressOutput } from "./DisassociateAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateAddressInput
  },
  output: {
    shape: DisassociateAddressOutput
  },
  errors: []
};
