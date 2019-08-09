import { List as _List_ } from "@aws-sdk/types";
import { _HyperParameterSpecification } from "./_HyperParameterSpecification";

export const _HyperParameterSpecifications: _List_ = {
  type: "list",
  member: {
    shape: _HyperParameterSpecification
  }
};
