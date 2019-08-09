import { DeleteRobotInput } from "./DeleteRobotInput";
import { DeleteRobotOutput } from "./DeleteRobotOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
