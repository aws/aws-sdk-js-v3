import { _CloudFrontOriginAccessIdentityList } from "./_CloudFrontOriginAccessIdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCloudFrontOriginAccessIdentitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFrontOriginAccessIdentityList: {
      shape: _CloudFrontOriginAccessIdentityList
    }
  },
  payload: "CloudFrontOriginAccessIdentityList"
};
