import { GetCloudFrontOriginAccessIdentityInput } from "./GetCloudFrontOriginAccessIdentityInput";
import { GetCloudFrontOriginAccessIdentityOutput } from "./GetCloudFrontOriginAccessIdentityOutput";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCloudFrontOriginAccessIdentity2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCloudFrontOriginAccessIdentity2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront/{Id}"
  },
  input: {
    shape: GetCloudFrontOriginAccessIdentityInput
  },
  output: {
    shape: GetCloudFrontOriginAccessIdentityOutput
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
