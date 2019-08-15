import { DeleteSkillAuthorizationInput } from "../shapes/DeleteSkillAuthorizationInput";
import { DeleteSkillAuthorizationOutput } from "../shapes/DeleteSkillAuthorizationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSkillAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSkillAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSkillAuthorizationInput
  },
  output: {
    shape: DeleteSkillAuthorizationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
