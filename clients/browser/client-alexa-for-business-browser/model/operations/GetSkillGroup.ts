import { GetSkillGroupInput } from "../shapes/GetSkillGroupInput";
import { GetSkillGroupOutput } from "../shapes/GetSkillGroupOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSkillGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSkillGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSkillGroupInput
  },
  output: {
    shape: GetSkillGroupOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
