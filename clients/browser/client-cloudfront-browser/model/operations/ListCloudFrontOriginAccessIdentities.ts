import { ListCloudFrontOriginAccessIdentitiesInput } from "../shapes/ListCloudFrontOriginAccessIdentitiesInput";
import { ListCloudFrontOriginAccessIdentitiesOutput } from "../shapes/ListCloudFrontOriginAccessIdentitiesOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCloudFrontOriginAccessIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCloudFrontOriginAccessIdentities",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/origin-access-identity/cloudfront"
  },
  input: {
    shape: ListCloudFrontOriginAccessIdentitiesInput
  },
  output: {
    shape: ListCloudFrontOriginAccessIdentitiesOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
