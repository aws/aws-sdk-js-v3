import { UpdateCloudFrontOriginAccessIdentityInput } from "./UpdateCloudFrontOriginAccessIdentityInput";
import { UpdateCloudFrontOriginAccessIdentityOutput } from "./UpdateCloudFrontOriginAccessIdentityOutput";
import { AccessDenied } from "./AccessDenied";
import { IllegalUpdate } from "./IllegalUpdate";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { MissingBody } from "./MissingBody";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "./PreconditionFailed";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCloudFrontOriginAccessIdentity2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCloudFrontOriginAccessIdentity2019_03_26",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront/{Id}/config"
  },
  input: {
    shape: UpdateCloudFrontOriginAccessIdentityInput
  },
  output: {
    shape: UpdateCloudFrontOriginAccessIdentityOutput
  },
  errors: [
    {
      shape: AccessDenied
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
      shape: NoSuchCloudFrontOriginAccessIdentity
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InconsistentQuantities
    }
  ]
};
