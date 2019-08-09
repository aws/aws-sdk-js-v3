import { List as _List_ } from "@aws-sdk/types";
import { _RetentionConfiguration } from "./_RetentionConfiguration";

export const _RetentionConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _RetentionConfiguration
  }
};
