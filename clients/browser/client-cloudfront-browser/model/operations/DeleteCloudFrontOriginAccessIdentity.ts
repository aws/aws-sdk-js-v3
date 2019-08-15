import { DeleteCloudFrontOriginAccessIdentityInput } from "../shapes/DeleteCloudFrontOriginAccessIdentityInput";
import { DeleteCloudFrontOriginAccessIdentityOutput } from "../shapes/DeleteCloudFrontOriginAccessIdentityOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchCloudFrontOriginAccessIdentity } from "../shapes/NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { CloudFrontOriginAccessIdentityInUse } from "../shapes/CloudFrontOriginAccessIdentityInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCloudFrontOriginAccessIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCloudFrontOriginAccessIdentity",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront/{Id}"
  },
  input: {
    shape: DeleteCloudFrontOriginAccessIdentityInput
  },
  output: {
    shape: DeleteCloudFrontOriginAccessIdentityOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchCloudFrontOriginAccessIdentity
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: CloudFrontOriginAccessIdentityInUse
    }
  ]
};
