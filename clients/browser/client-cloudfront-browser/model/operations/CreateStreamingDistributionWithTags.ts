import { CreateStreamingDistributionWithTagsInput } from "../shapes/CreateStreamingDistributionWithTagsInput";
import { CreateStreamingDistributionWithTagsOutput } from "../shapes/CreateStreamingDistributionWithTagsOutput";
import { CNAMEAlreadyExists } from "../shapes/CNAMEAlreadyExists";
import { StreamingDistributionAlreadyExists } from "../shapes/StreamingDistributionAlreadyExists";
import { InvalidOrigin } from "../shapes/InvalidOrigin";
import { InvalidOriginAccessIdentity } from "../shapes/InvalidOriginAccessIdentity";
import { AccessDenied } from "../shapes/AccessDenied";
import { TooManyTrustedSigners } from "../shapes/TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "../shapes/TrustedSignerDoesNotExist";
import { MissingBody } from "../shapes/MissingBody";
import { TooManyStreamingDistributionCNAMEs } from "../shapes/TooManyStreamingDistributionCNAMEs";
import { TooManyStreamingDistributions } from "../shapes/TooManyStreamingDistributions";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { InvalidTagging } from "../shapes/InvalidTagging";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStreamingDistributionWithTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStreamingDistributionWithTags",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/streaming-distribution?WithTags"
  },
  input: {
    shape: CreateStreamingDistributionWithTagsInput
  },
  output: {
    shape: CreateStreamingDistributionWithTagsOutput
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
    },
    {
      shape: InvalidTagging
    }
  ]
};
