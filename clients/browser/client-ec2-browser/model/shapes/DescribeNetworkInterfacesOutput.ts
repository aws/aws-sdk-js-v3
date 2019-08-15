import { _NetworkInterfaceList } from "./_NetworkInterfaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfaces: {
      shape: _NetworkInterfaceList,
      locationName: "networkInterfaceSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
