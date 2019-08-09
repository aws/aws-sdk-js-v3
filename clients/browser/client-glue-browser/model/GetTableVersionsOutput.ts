import { _GetTableVersionsList } from "./_GetTableVersionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTableVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableVersions: {
      shape: _GetTableVersionsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
