import { SetSMSAttributesInput } from "../shapes/SetSMSAttributesInput";
import { SetSMSAttributesOutput } from "../shapes/SetSMSAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetSMSAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSMSAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSMSAttributesInput
  },
  output: {
    shape: SetSMSAttributesOutput,
    resultWrapper: "SetSMSAttributesResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottledException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
