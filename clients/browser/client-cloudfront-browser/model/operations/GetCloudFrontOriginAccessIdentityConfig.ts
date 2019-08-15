import { GetCloudFrontOriginAccessIdentityConfigInput } from "../shapes/GetCloudFrontOriginAccessIdentityConfigInput";
import { GetCloudFrontOriginAccessIdentityConfigOutput } from "../shapes/GetCloudFrontOriginAccessIdentityConfigOutput";
import { NoSuchCloudFrontOriginAccessIdentity } from "../shapes/NoSuchCloudFrontOriginAccessIdentity";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCloudFrontOriginAccessIdentityConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCloudFrontOriginAccessIdentityConfig",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront/{Id}/config"
  },
  input: {
    shape: GetCloudFrontOriginAccessIdentityConfigInput
  },
  output: {
    shape: GetCloudFrontOriginAccessIdentityConfigOutput
  },
  errors: [
    {
      shape: NoSuchCloudFrontOriginAccessIdentity
    },
    {
      shape: AccessDenied
    }
  ]
};
