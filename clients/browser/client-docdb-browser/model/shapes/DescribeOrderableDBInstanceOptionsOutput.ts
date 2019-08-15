import { _OrderableDBInstanceOptionsList } from "./_OrderableDBInstanceOptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrderableDBInstanceOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrderableDBInstanceOptions: {
      shape: _OrderableDBInstanceOptionsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
