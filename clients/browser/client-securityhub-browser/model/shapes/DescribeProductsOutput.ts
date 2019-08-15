import { _ProductsList } from "./_ProductsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProductsOutput: _Structure_ = {
  type: "structure",
  required: ["Products"],
  members: {
    Products: {
      shape: _ProductsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
