import { GetCloudFrontOriginAccessIdentityInput } from "../shapes/GetCloudFrontOriginAccessIdentityInput";
import { GetCloudFrontOriginAccessIdentityOutput } from "../shapes/GetCloudFrontOriginAccessIdentityOutput";
import { NoSuchCloudFrontOriginAccessIdentity } from "../shapes/NoSuchCloudFrontOriginAccessIdentity";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCloudFrontOriginAccessIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCloudFrontOriginAccessIdentity",
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
