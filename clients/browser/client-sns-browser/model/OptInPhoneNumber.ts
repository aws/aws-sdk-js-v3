import { OptInPhoneNumberInput } from "./OptInPhoneNumberInput";
import { OptInPhoneNumberOutput } from "./OptInPhoneNumberOutput";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const OptInPhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "OptInPhoneNumber",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: OptInPhoneNumberInput
  },
  output: {
    shape: OptInPhoneNumberOutput,
    resultWrapper: "OptInPhoneNumberResult"
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
