import { List as _List_ } from "@aws-sdk/types";
import { _ServiceConfiguration } from "./_ServiceConfiguration";

export const _ServiceConfigurationSet: _List_ = {
  type: "list",
  member: {
    shape: _ServiceConfiguration,
    locationName: "item"
  }
};
