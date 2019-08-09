import { List as _List_ } from "@aws-sdk/types";
import { _SecurityConfiguration } from "./_SecurityConfiguration";

export const _SecurityConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _SecurityConfiguration
  }
};
