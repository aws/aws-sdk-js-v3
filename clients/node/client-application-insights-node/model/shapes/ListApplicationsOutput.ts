import { _ApplicationInfoList } from "./_ApplicationInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationInfoList: {
      shape: _ApplicationInfoList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
