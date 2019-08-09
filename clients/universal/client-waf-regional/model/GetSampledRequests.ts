import { GetSampledRequestsInput } from "./GetSampledRequestsInput";
import { GetSampledRequestsOutput } from "./GetSampledRequestsOutput";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
