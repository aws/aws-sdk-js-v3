import { ListPhoneNumbersOptedOutInput } from "./ListPhoneNumbersOptedOutInput";
import { ListPhoneNumbersOptedOutOutput } from "./ListPhoneNumbersOptedOutOutput";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPhoneNumbersOptedOut: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPhoneNumbersOptedOut",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPhoneNumbersOptedOutInput
  },
  output: {
    shape: ListPhoneNumbersOptedOutOutput,
    resultWrapper: "ListPhoneNumbersOptedOutResult"
  },
  errors: [
    {
      shape: ThrottledException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
