import { _EC2Specification } from "./_EC2Specification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2Specification: {
      shape: _EC2Specification
    }
  }
};
