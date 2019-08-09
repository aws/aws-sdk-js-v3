import { GetDistributionInput } from "./GetDistributionInput";
import { GetDistributionOutput } from "./GetDistributionOutput";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDistribution2019_03_26",
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
