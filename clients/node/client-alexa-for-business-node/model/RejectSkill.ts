import { RejectSkillInput } from "./RejectSkillInput";
import { RejectSkillOutput } from "./RejectSkillOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectSkill: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectSkill",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectSkillInput
  },
  output: {
    shape: RejectSkillOutput
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
