import { CreateStreamingDistributionInput } from "./CreateStreamingDistributionInput";
import { CreateStreamingDistributionOutput } from "./CreateStreamingDistributionOutput";
import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { StreamingDistributionAlreadyExists } from "./StreamingDistributionAlreadyExists";
import { InvalidOrigin } from "./InvalidOrigin";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { AccessDenied } from "./AccessDenied";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { MissingBody } from "./MissingBody";
import { TooManyStreamingDistributionCNAMEs } from "./TooManyStreamingDistributionCNAMEs";
import { TooManyStreamingDistributions } from "./TooManyStreamingDistributions";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateStreamingDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStreamingDistribution2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/streaming-distribution"
  },
  input: {
    shape: CreateStreamingDistributionInput
  },
  output: {
    shape: CreateStreamingDistributionOutput
  },
  errors: [
    {
      shape: CNAMEAlreadyExists
    },
    {
      shape: StreamingDistributionAlreadyExists
    },
    {
      shape: InvalidOrigin
    },
    {
      shape: InvalidOriginAccessIdentity
    },
    {
      shape: AccessDenied
    },
    {
      shape: TooManyTrustedSigners
    },
    {
      shape: TrustedSignerDoesNotExist
    },
    {
      shape: MissingBody
    },
    {
      shape: TooManyStreamingDistributionCNAMEs
    },
    {
      shape: TooManyStreamingDistributions
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InconsistentQuantities
    }
  ]
};
