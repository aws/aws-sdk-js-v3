import { GetSMSAttributesInput } from "../shapes/GetSMSAttributesInput";
import { GetSMSAttributesOutput } from "../shapes/GetSMSAttributesOutput";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
