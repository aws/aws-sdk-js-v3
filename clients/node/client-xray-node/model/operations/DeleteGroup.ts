import { DeleteGroupInput } from "../shapes/DeleteGroupInput";
import { DeleteGroupOutput } from "../shapes/DeleteGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGroup",
  http: {
    method: "POST",
    requestUri: "/DeleteGroup"
  },
  input: {
    shape: DeleteGroupInput
  },
  output: {
    shape: DeleteGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
