import { GetSMSAttributesInput } from "./GetSMSAttributesInput";
import { GetSMSAttributesOutput } from "./GetSMSAttributesOutput";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSMSAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSMSAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSMSAttributesInput
  },
  output: {
    shape: GetSMSAttributesOutput,
    resultWrapper: "GetSMSAttributesResult"
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
