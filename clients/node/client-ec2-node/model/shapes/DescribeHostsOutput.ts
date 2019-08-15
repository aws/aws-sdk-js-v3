import { _HostList } from "./_HostList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Hosts: {
      shape: _HostList,
      locationName: "hostSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
