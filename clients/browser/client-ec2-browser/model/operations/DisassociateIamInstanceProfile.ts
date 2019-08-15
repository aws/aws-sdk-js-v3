import { DisassociateIamInstanceProfileInput } from "../shapes/DisassociateIamInstanceProfileInput";
import { DisassociateIamInstanceProfileOutput } from "../shapes/DisassociateIamInstanceProfileOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateIamInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateIamInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateIamInstanceProfileInput
  },
  output: {
    shape: DisassociateIamInstanceProfileOutput
  },
  errors: []
};
