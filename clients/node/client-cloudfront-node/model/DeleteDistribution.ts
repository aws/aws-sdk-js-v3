import { DeleteDistributionInput } from "./DeleteDistributionInput";
import { DeleteDistributionOutput } from "./DeleteDistributionOutput";
import { AccessDenied } from "./AccessDenied";
import { DistributionNotDisabled } from "./DistributionNotDisabled";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDistribution2019_03_26",
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
