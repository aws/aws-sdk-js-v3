import { DeleteGroupInput } from "../shapes/DeleteGroupInput";
import { DeleteGroupOutput } from "../shapes/DeleteGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGroup",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/groups/{GroupId}"
  },
  input: {
    shape: DeleteGroupInput
  },
  output: {
    shape: DeleteGroupOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
