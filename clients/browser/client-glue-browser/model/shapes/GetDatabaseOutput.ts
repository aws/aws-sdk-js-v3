import { _Database } from "./_Database";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDatabaseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Database: {
      shape: _Database
    }
  }
};
