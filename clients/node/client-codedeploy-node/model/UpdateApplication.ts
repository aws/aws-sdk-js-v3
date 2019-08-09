import { UpdateApplicationInput } from "./UpdateApplicationInput";
import { UpdateApplicationOutput } from "./UpdateApplicationOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "./ApplicationAlreadyExistsException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
