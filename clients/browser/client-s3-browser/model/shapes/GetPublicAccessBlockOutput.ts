import { _PublicAccessBlockConfiguration } from "./_PublicAccessBlockConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPublicAccessBlockOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicAccessBlockConfiguration: {
      shape: _PublicAccessBlockConfiguration
    }
  },
  payload: "PublicAccessBlockConfiguration"
};
