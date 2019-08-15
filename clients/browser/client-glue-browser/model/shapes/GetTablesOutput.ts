import { _TableList } from "./_TableList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTablesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableList: {
      shape: _TableList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
