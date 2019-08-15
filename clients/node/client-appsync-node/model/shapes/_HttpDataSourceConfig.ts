import { _AuthorizationConfig } from "./_AuthorizationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpDataSourceConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    endpoint: {
      shape: {
        type: "string"
      }
    },
    authorizationConfig: {
      shape: _AuthorizationConfig
    }
  }
};
