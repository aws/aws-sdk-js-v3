import { CreateApplicationInput } from "../shapes/CreateApplicationInput";
import { CreateApplicationOutput } from "../shapes/CreateApplicationOutput";
import { TooManyApplicationsException } from "../shapes/TooManyApplicationsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationInput
  },
  output: {
    shape: CreateApplicationOutput,
    resultWrapper: "CreateApplicationResult"
  },
  errors: [
    {
      shape: TooManyApplicationsException
    }
  ]
};
