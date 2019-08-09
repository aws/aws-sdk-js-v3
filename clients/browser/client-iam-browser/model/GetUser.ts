import { GetUserInput } from "./GetUserInput";
import { GetUserOutput } from "./GetUserOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
