import { GetCloudFrontOriginAccessIdentityConfigInput } from "./GetCloudFrontOriginAccessIdentityConfigInput";
import { GetCloudFrontOriginAccessIdentityConfigOutput } from "./GetCloudFrontOriginAccessIdentityConfigOutput";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCloudFrontOriginAccessIdentityConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCloudFrontOriginAccessIdentityConfig2019_03_26",
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
