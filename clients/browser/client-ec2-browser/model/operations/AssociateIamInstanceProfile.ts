import { AssociateIamInstanceProfileInput } from "../shapes/AssociateIamInstanceProfileInput";
import { AssociateIamInstanceProfileOutput } from "../shapes/AssociateIamInstanceProfileOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateIamInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateIamInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateIamInstanceProfileInput
  },
  output: {
    shape: AssociateIamInstanceProfileOutput
  },
  errors: []
};
