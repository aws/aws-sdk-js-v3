import { ListInvalidationsInput } from "./ListInvalidationsInput";
import { ListInvalidationsOutput } from "./ListInvalidationsOutput";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListInvalidations2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInvalidations2019_03_26",
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
