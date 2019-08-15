import { _RelationalDatabaseParameterList } from "./_RelationalDatabaseParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    parameters: {
      shape: _RelationalDatabaseParameterList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
