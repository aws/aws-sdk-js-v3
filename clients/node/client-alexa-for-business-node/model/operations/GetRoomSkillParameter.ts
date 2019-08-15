import { GetRoomSkillParameterInput } from "../shapes/GetRoomSkillParameterInput";
import { GetRoomSkillParameterOutput } from "../shapes/GetRoomSkillParameterOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
