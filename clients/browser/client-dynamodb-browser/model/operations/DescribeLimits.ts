import { DescribeLimitsInput } from "../shapes/DescribeLimitsInput";
import { DescribeLimitsOutput } from "../shapes/DescribeLimitsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLimits",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLimitsInput
  },
  output: {
    shape: DescribeLimitsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
