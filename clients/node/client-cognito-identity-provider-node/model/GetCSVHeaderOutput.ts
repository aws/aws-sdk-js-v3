import { _ListOfStringTypes } from "./_ListOfStringTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCSVHeaderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CSVHeader: {
      shape: _ListOfStringTypes
    }
  }
};
