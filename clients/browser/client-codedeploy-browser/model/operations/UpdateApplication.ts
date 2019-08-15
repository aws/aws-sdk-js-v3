import { UpdateApplicationInput } from "../shapes/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../shapes/UpdateApplicationOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "../shapes/ApplicationAlreadyExistsException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationInput
  },
  output: {
    shape: UpdateApplicationOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationAlreadyExistsException
    },
    {
      shape: ApplicationDoesNotExistException
    }
  ]
};
