import { CheckIfPhoneNumberIsOptedOutInput } from "./CheckIfPhoneNumberIsOptedOutInput";
import { CheckIfPhoneNumberIsOptedOutOutput } from "./CheckIfPhoneNumberIsOptedOutOutput";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CheckIfPhoneNumberIsOptedOut: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CheckIfPhoneNumberIsOptedOut",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CheckIfPhoneNumberIsOptedOutInput
  },
  output: {
    shape: CheckIfPhoneNumberIsOptedOutOutput,
    resultWrapper: "CheckIfPhoneNumberIsOptedOutResult"
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
