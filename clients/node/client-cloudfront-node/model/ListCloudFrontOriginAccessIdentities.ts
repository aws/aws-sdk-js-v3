import { ListCloudFrontOriginAccessIdentitiesInput } from "./ListCloudFrontOriginAccessIdentitiesInput";
import { ListCloudFrontOriginAccessIdentitiesOutput } from "./ListCloudFrontOriginAccessIdentitiesOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCloudFrontOriginAccessIdentities2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCloudFrontOriginAccessIdentities2019_03_26",
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
