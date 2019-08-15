import { DeleteApplicationInput } from "../shapes/DeleteApplicationInput";
import { DeleteApplicationOutput } from "../shapes/DeleteApplicationOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationInput
  },
  output: {
    shape: DeleteApplicationOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: InvalidRoleException
    }
  ]
};
