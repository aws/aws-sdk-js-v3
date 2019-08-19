import { UpdateCloudFrontOriginAccessIdentityInput } from "../shapes/UpdateCloudFrontOriginAccessIdentityInput";
import { UpdateCloudFrontOriginAccessIdentityOutput } from "../shapes/UpdateCloudFrontOriginAccessIdentityOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { IllegalUpdate } from "../shapes/IllegalUpdate";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { MissingBody } from "../shapes/MissingBody";
import { NoSuchCloudFrontOriginAccessIdentity } from "../shapes/NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCloudFrontOriginAccessIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCloudFrontOriginAccessIdentity",
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
