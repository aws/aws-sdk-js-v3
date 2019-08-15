import { _OrderableClusterOptionsList } from "./_OrderableClusterOptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrderableClusterOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrderableClusterOptions: {
      shape: _OrderableClusterOptionsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
