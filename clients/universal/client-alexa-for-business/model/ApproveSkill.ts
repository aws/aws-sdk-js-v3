import { ApproveSkillInput } from "./ApproveSkillInput";
import { ApproveSkillOutput } from "./ApproveSkillOutput";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
