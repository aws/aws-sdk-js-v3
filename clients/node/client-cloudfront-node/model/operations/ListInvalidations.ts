import { ListInvalidationsInput } from "../shapes/ListInvalidationsInput";
import { ListInvalidationsOutput } from "../shapes/ListInvalidationsOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInvalidations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInvalidations",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distribution/{DistributionId}/invalidation"
  },
  input: {
    shape: ListInvalidationsInput
  },
  output: {
    shape: ListInvalidationsOutput
  },
  errors: [
    {
      shape: InvalidArgument
    },
    {
      shape: NoSuchDistribution
    },
    {
      shape: AccessDenied
    }
  ]
};
