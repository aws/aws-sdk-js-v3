import { ListTopicsInput } from "./ListTopicsInput";
import { ListTopicsOutput } from "./ListTopicsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
