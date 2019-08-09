import { _DatabaseList } from "./_DatabaseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDatabasesOutput: _Structure_ = {
  type: "structure",
  required: ["DatabaseList"],
  members: {
    DatabaseList: {
      shape: _DatabaseList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
