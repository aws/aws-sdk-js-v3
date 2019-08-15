import { _PathList } from "./_PathList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JdbcTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionName: {
      shape: {
        type: "string"
      }
    },
    Path: {
      shape: {
        type: "string"
      }
    },
    Exclusions: {
      shape: _PathList
    }
  }
};
