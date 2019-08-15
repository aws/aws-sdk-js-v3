import { Map as _Map_ } from "@aws-sdk/types";
import { _AuditCheckConfiguration } from "./_AuditCheckConfiguration";

export const _AuditCheckConfigurations: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _AuditCheckConfiguration
  }
};
