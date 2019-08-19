import { GetInvalidationInput } from "../shapes/GetInvalidationInput";
import { GetInvalidationOutput } from "../shapes/GetInvalidationOutput";
import { NoSuchInvalidation } from "../shapes/NoSuchInvalidation";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetInvalidation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInvalidation",
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
