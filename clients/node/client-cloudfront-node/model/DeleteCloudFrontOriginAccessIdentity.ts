import { DeleteCloudFrontOriginAccessIdentityInput } from "./DeleteCloudFrontOriginAccessIdentityInput";
import { DeleteCloudFrontOriginAccessIdentityOutput } from "./DeleteCloudFrontOriginAccessIdentityOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "./PreconditionFailed";
import { CloudFrontOriginAccessIdentityInUse } from "./CloudFrontOriginAccessIdentityInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCloudFrontOriginAccessIdentity2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCloudFrontOriginAccessIdentity2019_03_26",
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
