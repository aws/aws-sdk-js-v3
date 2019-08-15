import { GetSampledRequestsInput } from "../shapes/GetSampledRequestsInput";
import { GetSampledRequestsOutput } from "../shapes/GetSampledRequestsOutput";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSampledRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSampledRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSampledRequestsInput
  },
  output: {
    shape: GetSampledRequestsOutput
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
