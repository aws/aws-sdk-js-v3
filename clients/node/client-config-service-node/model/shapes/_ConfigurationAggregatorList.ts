import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationAggregator } from "./_ConfigurationAggregator";

export const _ConfigurationAggregatorList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationAggregator
  }
};
