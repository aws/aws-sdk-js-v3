import { _ListOfImportJobResponse } from "./_ListOfImportJobResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportJobsResponse: _Structure_ = {
  type: "structure",
  required: ["Item"],
  members: {
    Item: {
      shape: _ListOfImportJobResponse
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
