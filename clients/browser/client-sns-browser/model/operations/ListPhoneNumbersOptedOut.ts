import { ListPhoneNumbersOptedOutInput } from "../shapes/ListPhoneNumbersOptedOutInput";
import { ListPhoneNumbersOptedOutOutput } from "../shapes/ListPhoneNumbersOptedOutOutput";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
