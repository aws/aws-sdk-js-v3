import { DeleteSkillGroupInput } from "../shapes/DeleteSkillGroupInput";
import { DeleteSkillGroupOutput } from "../shapes/DeleteSkillGroupOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSkillGroupInput
  },
  output: {
    shape: DeleteSkillGroupOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
