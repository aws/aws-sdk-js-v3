import { GetRoomSkillParameterInput } from "./GetRoomSkillParameterInput";
import { GetRoomSkillParameterOutput } from "./GetRoomSkillParameterOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRoomSkillParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRoomSkillParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRoomSkillParameterInput
  },
  output: {
    shape: GetRoomSkillParameterOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
