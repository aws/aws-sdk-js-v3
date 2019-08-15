import { DisassociateSkillFromUsersInput } from "../shapes/DisassociateSkillFromUsersInput";
import { DisassociateSkillFromUsersOutput } from "../shapes/DisassociateSkillFromUsersOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateSkillFromUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateSkillFromUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateSkillFromUsersInput
  },
  output: {
    shape: DisassociateSkillFromUsersOutput
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
