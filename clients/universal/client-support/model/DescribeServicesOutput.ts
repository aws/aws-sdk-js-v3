import { _ServiceList } from "./_ServiceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    services: {
      shape: _ServiceList
    }
  }
};
