import { UpdateStreamingDistributionInput } from "./UpdateStreamingDistributionInput";
import { UpdateStreamingDistributionOutput } from "./UpdateStreamingDistributionOutput";
import { AccessDenied } from "./AccessDenied";
import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { IllegalUpdate } from "./IllegalUpdate";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { MissingBody } from "./MissingBody";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
import { TooManyStreamingDistributionCNAMEs } from "./TooManyStreamingDistributionCNAMEs";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateStreamingDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStreamingDistribution2019_03_26",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/streaming-distribution/{Id}/config"
  },
  input: {
    shape: UpdateStreamingDistributionInput
  },
  output: {
    shape: UpdateStreamingDistributionOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: CNAMEAlreadyExists
    },
    {
      shape: IllegalUpdate
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: MissingBody
    },
    {
      shape: NoSuchStreamingDistribution
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: TooManyStreamingDistributionCNAMEs
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidOriginAccessIdentity
    },
    {
      shape: TooManyTrustedSigners
    },
    {
      shape: TrustedSignerDoesNotExist
    },
    {
      shape: InconsistentQuantities
    }
  ]
};
