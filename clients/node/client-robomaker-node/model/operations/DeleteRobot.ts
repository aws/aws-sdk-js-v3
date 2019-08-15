import { DeleteRobotInput } from "../shapes/DeleteRobotInput";
import { DeleteRobotOutput } from "../shapes/DeleteRobotOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRobot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRobot",
  http: {
    method: "POST",
    requestUri: "/deleteRobot"
  },
  input: {
    shape: DeleteRobotInput
  },
  output: {
    shape: DeleteRobotOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
