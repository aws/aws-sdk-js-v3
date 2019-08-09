import { DisassociateSkillFromUsersInput } from "./DisassociateSkillFromUsersInput";
import { DisassociateSkillFromUsersOutput } from "./DisassociateSkillFromUsersOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
