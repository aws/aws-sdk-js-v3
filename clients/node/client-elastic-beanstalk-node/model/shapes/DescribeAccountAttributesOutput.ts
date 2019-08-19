import { _ResourceQuotas } from "./_ResourceQuotas";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceQuotas: {
      shape: _ResourceQuotas
    }
  }
};
