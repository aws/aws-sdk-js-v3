import { _ListOfExportJobResponse } from "./_ListOfExportJobResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportJobsResponse: _Structure_ = {
  type: "structure",
  required: ["Item"],
  members: {
    Item: {
      shape: _ListOfExportJobResponse
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
