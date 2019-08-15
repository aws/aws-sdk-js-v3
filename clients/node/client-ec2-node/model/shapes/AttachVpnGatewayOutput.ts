import { _VpcAttachment } from "./_VpcAttachment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachVpnGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcAttachment: {
      shape: _VpcAttachment,
      locationName: "attachment"
    }
  }
};
