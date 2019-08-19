import { _StringList } from "./_StringList";
import { _ServiceFieldList } from "./_ServiceFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServicesInput: _Structure_ = {
  type: "structure",
  required: ["services"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    services: {
      shape: _StringList
    },
    include: {
      shape: _ServiceFieldList
    }
  }
};
