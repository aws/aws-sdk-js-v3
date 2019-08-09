import { DeleteStreamingDistributionInput } from "./DeleteStreamingDistributionInput";
import { DeleteStreamingDistributionOutput } from "./DeleteStreamingDistributionOutput";
import { AccessDenied } from "./AccessDenied";
import { StreamingDistributionNotDisabled } from "./StreamingDistributionNotDisabled";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteStreamingDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStreamingDistribution2019_03_26",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/streaming-distribution/{Id}"
  },
  input: {
    shape: DeleteStreamingDistributionInput
  },
  output: {
    shape: DeleteStreamingDistributionOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: StreamingDistributionNotDisabled
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchStreamingDistribution
    },
    {
      shape: PreconditionFailed
    }
  ]
};
