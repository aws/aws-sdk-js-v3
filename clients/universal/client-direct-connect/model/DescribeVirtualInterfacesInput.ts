import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualInterfacesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    }
  }
};
