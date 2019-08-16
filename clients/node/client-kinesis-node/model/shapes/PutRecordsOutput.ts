import { _PutRecordsResultEntryList } from "./_PutRecordsResultEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordsOutput: _Structure_ = {
  type: "structure",
  required: ["Records"],
  members: {
    FailedRecordCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Records: {
      shape: _PutRecordsResultEntryList
    },
    EncryptionType: {
      shape: {
        type: "string"
      }
    }
  }
};
