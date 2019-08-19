import { OptInPhoneNumberInput } from "../shapes/OptInPhoneNumberInput";
import { OptInPhoneNumberOutput } from "../shapes/OptInPhoneNumberOutput";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
