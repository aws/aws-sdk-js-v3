import { GetChangeTokenInput } from "../shapes/GetChangeTokenInput";
import { GetChangeTokenOutput } from "../shapes/GetChangeTokenOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
