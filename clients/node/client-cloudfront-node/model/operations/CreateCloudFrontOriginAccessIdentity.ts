import { CreateCloudFrontOriginAccessIdentityInput } from "../shapes/CreateCloudFrontOriginAccessIdentityInput";
import { CreateCloudFrontOriginAccessIdentityOutput } from "../shapes/CreateCloudFrontOriginAccessIdentityOutput";
import { CloudFrontOriginAccessIdentityAlreadyExists } from "../shapes/CloudFrontOriginAccessIdentityAlreadyExists";
import { MissingBody } from "../shapes/MissingBody";
import { TooManyCloudFrontOriginAccessIdentities } from "../shapes/TooManyCloudFrontOriginAccessIdentities";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCloudFrontOriginAccessIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCloudFrontOriginAccessIdentity",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront"
  },
  input: {
    shape: CreateCloudFrontOriginAccessIdentityInput
  },
  output: {
    shape: CreateCloudFrontOriginAccessIdentityOutput
  },
  errors: [
    {
      shape: CloudFrontOriginAccessIdentityAlreadyExists
    },
    {
      shape: MissingBody
    },
    {
      shape: TooManyCloudFrontOriginAccessIdentities
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InconsistentQuantities
    }
  ]
};
