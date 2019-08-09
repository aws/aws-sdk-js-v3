import { CreateCloudFrontOriginAccessIdentityInput } from "./CreateCloudFrontOriginAccessIdentityInput";
import { CreateCloudFrontOriginAccessIdentityOutput } from "./CreateCloudFrontOriginAccessIdentityOutput";
import { CloudFrontOriginAccessIdentityAlreadyExists } from "./CloudFrontOriginAccessIdentityAlreadyExists";
import { MissingBody } from "./MissingBody";
import { TooManyCloudFrontOriginAccessIdentities } from "./TooManyCloudFrontOriginAccessIdentities";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCloudFrontOriginAccessIdentity2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCloudFrontOriginAccessIdentity2019_03_26",
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
