import { AssociateSkillWithSkillGroupInput } from "./AssociateSkillWithSkillGroupInput";
import { AssociateSkillWithSkillGroupOutput } from "./AssociateSkillWithSkillGroupOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { SkillNotLinkedException } from "./SkillNotLinkedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateSkillWithSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateSkillWithSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateSkillWithSkillGroupInput
  },
  output: {
    shape: AssociateSkillWithSkillGroupOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: SkillNotLinkedException
    }
  ]
};
