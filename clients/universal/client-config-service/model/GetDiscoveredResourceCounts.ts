import { GetDiscoveredResourceCountsInput } from "./GetDiscoveredResourceCountsInput";
import { GetDiscoveredResourceCountsOutput } from "./GetDiscoveredResourceCountsOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
