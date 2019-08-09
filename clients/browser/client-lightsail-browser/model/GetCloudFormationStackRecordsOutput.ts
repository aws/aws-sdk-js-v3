import { _CloudFormationStackRecordList } from "./_CloudFormationStackRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCloudFormationStackRecordsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cloudFormationStackRecords: {
      shape: _CloudFormationStackRecordList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
