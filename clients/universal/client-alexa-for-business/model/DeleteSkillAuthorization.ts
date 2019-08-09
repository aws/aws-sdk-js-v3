import { DeleteSkillAuthorizationInput } from "./DeleteSkillAuthorizationInput";
import { DeleteSkillAuthorizationOutput } from "./DeleteSkillAuthorizationOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
