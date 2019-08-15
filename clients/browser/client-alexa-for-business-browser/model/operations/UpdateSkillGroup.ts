import { UpdateSkillGroupInput } from "../shapes/UpdateSkillGroupInput";
import { UpdateSkillGroupOutput } from "../shapes/UpdateSkillGroupOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSkillGroupInput
  },
  output: {
    shape: UpdateSkillGroupOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
