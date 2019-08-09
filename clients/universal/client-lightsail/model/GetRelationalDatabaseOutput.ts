import { _RelationalDatabase } from "./_RelationalDatabase";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    relationalDatabase: {
      shape: _RelationalDatabase
    }
  }
};
