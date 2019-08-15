import { CheckIfPhoneNumberIsOptedOutInput } from "../shapes/CheckIfPhoneNumberIsOptedOutInput";
import { CheckIfPhoneNumberIsOptedOutOutput } from "../shapes/CheckIfPhoneNumberIsOptedOutOutput";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
