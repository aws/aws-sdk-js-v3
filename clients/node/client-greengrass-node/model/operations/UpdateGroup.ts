import { UpdateGroupInput } from "../shapes/UpdateGroupInput";
import { UpdateGroupOutput } from "../shapes/UpdateGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroup",
  http: {
    method: "PUT",
    requestUri: "/greengrass/groups/{GroupId}"
  },
  input: {
    shape: UpdateGroupInput
  },
  output: {
    shape: UpdateGroupOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
