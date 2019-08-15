import { GetDistributionInput } from "../shapes/GetDistributionInput";
import { GetDistributionOutput } from "../shapes/GetDistributionOutput";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDistribution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDistribution",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distribution/{Id}"
  },
  input: {
    shape: GetDistributionInput
  },
  output: {
    shape: GetDistributionOutput
  },
  errors: [
    {
      shape: NoSuchDistribution
    },
    {
      shape: AccessDenied
    }
  ]
};
