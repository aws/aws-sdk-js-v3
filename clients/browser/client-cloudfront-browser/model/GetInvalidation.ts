import { GetInvalidationInput } from "./GetInvalidationInput";
import { GetInvalidationOutput } from "./GetInvalidationOutput";
import { NoSuchInvalidation } from "./NoSuchInvalidation";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInvalidation2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInvalidation2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distribution/{DistributionId}/invalidation/{Id}"
  },
  input: {
    shape: GetInvalidationInput
  },
  output: {
    shape: GetInvalidationOutput
  },
  errors: [
    {
      shape: NoSuchInvalidation
    },
    {
      shape: NoSuchDistribution
    },
    {
      shape: AccessDenied
    }
  ]
};
