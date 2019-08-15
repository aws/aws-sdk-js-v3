import { ApproveSkillInput } from "../shapes/ApproveSkillInput";
import { ApproveSkillOutput } from "../shapes/ApproveSkillOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApproveSkill: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApproveSkill",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApproveSkillInput
  },
  output: {
    shape: ApproveSkillOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
