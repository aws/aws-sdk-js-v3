import { AssociateSkillWithSkillGroupInput } from "../shapes/AssociateSkillWithSkillGroupInput";
import { AssociateSkillWithSkillGroupOutput } from "../shapes/AssociateSkillWithSkillGroupOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { SkillNotLinkedException } from "../shapes/SkillNotLinkedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
