import { PutRoomSkillParameterInput } from "../shapes/PutRoomSkillParameterInput";
import { PutRoomSkillParameterOutput } from "../shapes/PutRoomSkillParameterOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutRoomSkillParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRoomSkillParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRoomSkillParameterInput
  },
  output: {
    shape: PutRoomSkillParameterOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    }
  ]
};
