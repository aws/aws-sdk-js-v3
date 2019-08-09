import { GetApplicationInput } from "./GetApplicationInput";
import { GetApplicationOutput } from "./GetApplicationOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetApplicationInput
  },
  output: {
    shape: GetApplicationOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationDoesNotExistException
    }
  ]
};
