import { DeleteDistributionInput } from "../shapes/DeleteDistributionInput";
import { DeleteDistributionOutput } from "../shapes/DeleteDistributionOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { DistributionNotDisabled } from "../shapes/DistributionNotDisabled";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDistribution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDistribution",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/distribution/{Id}"
  },
  input: {
    shape: DeleteDistributionInput
  },
  output: {
    shape: DeleteDistributionOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: DistributionNotDisabled
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchDistribution
    },
    {
      shape: PreconditionFailed
    }
  ]
};
