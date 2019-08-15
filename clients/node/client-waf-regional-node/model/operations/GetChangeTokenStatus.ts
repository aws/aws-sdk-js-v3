import { GetChangeTokenStatusInput } from "../shapes/GetChangeTokenStatusInput";
import { GetChangeTokenStatusOutput } from "../shapes/GetChangeTokenStatusOutput";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetChangeTokenStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetChangeTokenStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetChangeTokenStatusInput
  },
  output: {
    shape: GetChangeTokenStatusOutput
  },
  errors: [
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInternalErrorException
    }
  ]
};
