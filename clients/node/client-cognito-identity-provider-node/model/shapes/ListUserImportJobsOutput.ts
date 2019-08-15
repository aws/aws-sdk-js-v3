import { _UserImportJobsListType } from "./_UserImportJobsListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserImportJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserImportJobs: {
      shape: _UserImportJobsListType
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
