import { List as _List_ } from "@aws-sdk/types";
import { _SqlRunConfiguration } from "./_SqlRunConfiguration";

export const _SqlRunConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _SqlRunConfiguration
  }
};
