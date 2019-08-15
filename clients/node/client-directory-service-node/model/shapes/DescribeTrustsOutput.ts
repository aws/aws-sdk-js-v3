import { _Trusts } from "./_Trusts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Trusts: {
      shape: _Trusts
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
