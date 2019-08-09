import { CreateSkillGroupInput } from "./CreateSkillGroupInput";
import { CreateSkillGroupOutput } from "./CreateSkillGroupOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSkillGroupInput
  },
  output: {
    shape: CreateSkillGroupOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
