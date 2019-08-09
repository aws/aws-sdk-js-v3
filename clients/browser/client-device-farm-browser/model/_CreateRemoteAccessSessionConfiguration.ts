import { _AmazonResourceNames } from "./_AmazonResourceNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateRemoteAccessSessionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    billingMethod: {
      shape: {
        type: "string"
      }
    },
    vpceConfigurationArns: {
      shape: _AmazonResourceNames
    }
  }
};
