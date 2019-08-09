import { List as _List_ } from "@aws-sdk/types";
import { _NotificationConfiguration } from "./_NotificationConfiguration";

export const _NotificationConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _NotificationConfiguration
  }
};
