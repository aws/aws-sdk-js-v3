import { AssociateSkillWithUsersInput } from "../shapes/AssociateSkillWithUsersInput";
import { AssociateSkillWithUsersOutput } from "../shapes/AssociateSkillWithUsersOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateSkillWithUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateSkillWithUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateSkillWithUsersInput
  },
  output: {
    shape: AssociateSkillWithUsersOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    }
  ]
};
