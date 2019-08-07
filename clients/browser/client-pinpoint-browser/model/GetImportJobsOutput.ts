import { _ImportJobsResponse } from "./_ImportJobsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetImportJobsOutput: _Structure_ = {
  type: "structure",
  required: ["ImportJobsResponse"],
  members: {
    ImportJobsResponse: {
      shape: _ImportJobsResponse
    }
  },
  payload: "ImportJobsResponse"
};
