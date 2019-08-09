import { _ApplicationsInfoList } from "./_ApplicationsInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationsInfo: {
      shape: _ApplicationsInfoList
    }
  }
};
