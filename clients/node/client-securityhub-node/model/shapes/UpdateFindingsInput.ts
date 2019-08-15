import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { _NoteUpdate } from "./_NoteUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFindingsInput: _Structure_ = {
  type: "structure",
  required: ["Filters"],
  members: {
    Filters: {
      shape: _AwsSecurityFindingFilters
    },
    Note: {
      shape: _NoteUpdate
    },
    RecordState: {
      shape: {
        type: "string"
      }
    }
  }
};
