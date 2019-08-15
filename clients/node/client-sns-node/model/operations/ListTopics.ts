import { ListTopicsInput } from "../shapes/ListTopicsInput";
import { ListTopicsOutput } from "../shapes/ListTopicsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTopics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTopics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTopicsInput
  },
  output: {
    shape: ListTopicsOutput,
    resultWrapper: "ListTopicsResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
