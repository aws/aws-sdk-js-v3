import { _DhcpOptionsList } from "./_DhcpOptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDhcpOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DhcpOptions: {
      shape: _DhcpOptionsList,
      locationName: "dhcpOptionsSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
