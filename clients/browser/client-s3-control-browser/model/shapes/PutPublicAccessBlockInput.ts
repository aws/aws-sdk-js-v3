import { _PublicAccessBlockConfiguration } from "./_PublicAccessBlockConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPublicAccessBlockInput: _Structure_ = {
  type: "structure",
  required: ["PublicAccessBlockConfiguration", "AccountId"],
  members: {
    PublicAccessBlockConfiguration: {
      shape: _PublicAccessBlockConfiguration,
      locationName: "PublicAccessBlockConfiguration",
      xmlNamespace: {
        uri: "http://awss3control.amazonaws.com/doc/2018-08-20/"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-account-id"
    }
  },
  payload: "PublicAccessBlockConfiguration"
};
