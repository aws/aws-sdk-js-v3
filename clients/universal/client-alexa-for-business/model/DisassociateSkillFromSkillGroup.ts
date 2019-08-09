import { DisassociateSkillFromSkillGroupInput } from "./DisassociateSkillFromSkillGroupInput";
import { DisassociateSkillFromSkillGroupOutput } from "./DisassociateSkillFromSkillGroupOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateSkillFromSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateSkillFromSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateSkillFromSkillGroupInput
  },
  output: {
    shape: DisassociateSkillFromSkillGroupOutput
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
