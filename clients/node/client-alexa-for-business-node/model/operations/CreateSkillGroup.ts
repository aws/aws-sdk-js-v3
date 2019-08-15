import { CreateSkillGroupInput } from "../shapes/CreateSkillGroupInput";
import { CreateSkillGroupOutput } from "../shapes/CreateSkillGroupOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
