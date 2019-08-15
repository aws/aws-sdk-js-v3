import { UpdateStreamingDistributionInput } from "../shapes/UpdateStreamingDistributionInput";
import { UpdateStreamingDistributionOutput } from "../shapes/UpdateStreamingDistributionOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { CNAMEAlreadyExists } from "../shapes/CNAMEAlreadyExists";
import { IllegalUpdate } from "../shapes/IllegalUpdate";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { MissingBody } from "../shapes/MissingBody";
import { NoSuchStreamingDistribution } from "../shapes/NoSuchStreamingDistribution";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { TooManyStreamingDistributionCNAMEs } from "../shapes/TooManyStreamingDistributionCNAMEs";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidOriginAccessIdentity } from "../shapes/InvalidOriginAccessIdentity";
import { TooManyTrustedSigners } from "../shapes/TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "../shapes/TrustedSignerDoesNotExist";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStreamingDistribution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStreamingDistribution",
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
