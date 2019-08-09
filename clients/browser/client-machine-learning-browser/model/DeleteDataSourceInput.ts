import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDataSourceInput: _Structure_ = {
  type: "structure",
  required: ["DataSourceId"],
  members: {
    DataSourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
