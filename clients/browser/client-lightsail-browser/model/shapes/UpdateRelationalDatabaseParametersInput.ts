import { _RelationalDatabaseParameterList } from "./_RelationalDatabaseParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRelationalDatabaseParametersInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName", "parameters"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    parameters: {
      shape: _RelationalDatabaseParameterList
    }
  }
};
