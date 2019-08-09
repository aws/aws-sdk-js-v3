import { GetChangeTokenInput } from "./GetChangeTokenInput";
import { GetChangeTokenOutput } from "./GetChangeTokenOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetChangeToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetChangeToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetChangeTokenInput
  },
  output: {
    shape: GetChangeTokenOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    }
  ]
};
