import { _RdsHttpEndpointConfig } from "./_RdsHttpEndpointConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseDataSourceConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabaseSourceType: {
      shape: {
        type: "string"
      }
    },
    rdsHttpEndpointConfig: {
      shape: _RdsHttpEndpointConfig
    }
  }
};
