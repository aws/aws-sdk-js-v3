import { GetUserInput } from "../shapes/GetUserInput";
import { GetUserOutput } from "../shapes/GetUserOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserInput
  },
  output: {
    shape: GetUserOutput,
    resultWrapper: "GetUserResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
