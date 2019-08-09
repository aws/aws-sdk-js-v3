import { DeleteRobotApplicationInput } from "./DeleteRobotApplicationInput";
import { DeleteRobotApplicationOutput } from "./DeleteRobotApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
