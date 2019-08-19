import { _PriceList } from "./_PriceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProductsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FormatVersion: {
      shape: {
        type: "string"
      }
    },
    PriceList: {
      shape: _PriceList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
