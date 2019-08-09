import { GetDistributionConfigInput } from "./GetDistributionConfigInput";
import { GetDistributionConfigOutput } from "./GetDistributionConfigOutput";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDistributionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDistributionConfig2019_03_26",
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
