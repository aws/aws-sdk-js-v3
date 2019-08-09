import { DeleteRoomSkillParameterInput } from "./DeleteRoomSkillParameterInput";
import { DeleteRoomSkillParameterOutput } from "./DeleteRoomSkillParameterOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRoomSkillParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoomSkillParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRoomSkillParameterInput
  },
  output: {
    shape: DeleteRoomSkillParameterOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    }
  ]
};
