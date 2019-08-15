import { _Table } from "./_Table";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Table: {
      shape: _Table
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
