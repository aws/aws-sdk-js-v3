import { SetSMSAttributesInput } from "./SetSMSAttributesInput";
import { SetSMSAttributesOutput } from "./SetSMSAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
