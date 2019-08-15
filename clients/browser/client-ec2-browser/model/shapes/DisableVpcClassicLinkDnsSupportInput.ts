import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableVpcClassicLinkDnsSupportInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    }
  }
};
