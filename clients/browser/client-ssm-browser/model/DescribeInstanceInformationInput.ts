import { _InstanceInformationFilterList } from "./_InstanceInformationFilterList";
import { _InstanceInformationStringFilterList } from "./_InstanceInformationStringFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceInformationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceInformationFilterList: {
      shape: _InstanceInformationFilterList
    },
    Filters: {
      shape: _InstanceInformationStringFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
