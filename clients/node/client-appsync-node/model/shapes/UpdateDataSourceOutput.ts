import { _DataSource } from "./_DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDataSourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dataSource: {
      shape: _DataSource
    }
  }
};
