import { GetDistributionConfigInput } from "../shapes/GetDistributionConfigInput";
import { GetDistributionConfigOutput } from "../shapes/GetDistributionConfigOutput";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDistributionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDistributionConfig",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distribution/{Id}/config"
  },
  input: {
    shape: GetDistributionConfigInput
  },
  output: {
    shape: GetDistributionConfigOutput
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
