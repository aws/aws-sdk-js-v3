import { DeletePolicyInput } from "./DeletePolicyInput";
import { DeletePolicyOutput } from "./DeletePolicyOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePolicyInput
  },
  output: {
    shape: DeletePolicyOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
