import { DeleteStreamingDistributionInput } from "../shapes/DeleteStreamingDistributionInput";
import { DeleteStreamingDistributionOutput } from "../shapes/DeleteStreamingDistributionOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { StreamingDistributionNotDisabled } from "../shapes/StreamingDistributionNotDisabled";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchStreamingDistribution } from "../shapes/NoSuchStreamingDistribution";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStreamingDistribution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStreamingDistribution",
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
