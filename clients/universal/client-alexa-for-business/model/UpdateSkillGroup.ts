import { UpdateSkillGroupInput } from "./UpdateSkillGroupInput";
import { UpdateSkillGroupOutput } from "./UpdateSkillGroupOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
