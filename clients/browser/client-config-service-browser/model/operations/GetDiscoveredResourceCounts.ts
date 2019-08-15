import { GetDiscoveredResourceCountsInput } from "../shapes/GetDiscoveredResourceCountsInput";
import { GetDiscoveredResourceCountsOutput } from "../shapes/GetDiscoveredResourceCountsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDiscoveredResourceCounts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDiscoveredResourceCounts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDiscoveredResourceCountsInput
  },
  output: {
    shape: GetDiscoveredResourceCountsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
