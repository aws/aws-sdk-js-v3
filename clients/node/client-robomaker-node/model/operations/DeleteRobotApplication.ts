import { DeleteRobotApplicationInput } from "../shapes/DeleteRobotApplicationInput";
import { DeleteRobotApplicationOutput } from "../shapes/DeleteRobotApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRobotApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRobotApplication",
  http: {
    method: "POST",
    requestUri: "/deleteRobotApplication"
  },
  input: {
    shape: DeleteRobotApplicationInput
  },
  output: {
    shape: DeleteRobotApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
