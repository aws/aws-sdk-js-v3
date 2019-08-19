import { List as _List_ } from "@aws-sdk/types";
import { _DescribeConfigurationsAttribute } from "./_DescribeConfigurationsAttribute";

export const _DescribeConfigurationsAttributes: _List_ = {
  type: "list",
  member: {
    shape: _DescribeConfigurationsAttribute
  }
};
