import { List as _List_ } from "@aws-sdk/types";
import { _LoggingConfiguration } from "./_LoggingConfiguration";

export const _LoggingConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _LoggingConfiguration
  }
};
