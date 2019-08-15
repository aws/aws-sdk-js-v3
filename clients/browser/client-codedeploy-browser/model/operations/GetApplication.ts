import { GetApplicationInput } from "../shapes/GetApplicationInput";
import { GetApplicationOutput } from "../shapes/GetApplicationOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
