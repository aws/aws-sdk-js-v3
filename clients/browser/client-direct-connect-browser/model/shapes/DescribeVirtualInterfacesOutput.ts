import { _VirtualInterfaceList } from "./_VirtualInterfaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualInterfacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualInterfaces: {
      shape: _VirtualInterfaceList
    }
  }
};
