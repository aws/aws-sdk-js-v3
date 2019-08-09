import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteGroupOutput } from "./DeleteGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
