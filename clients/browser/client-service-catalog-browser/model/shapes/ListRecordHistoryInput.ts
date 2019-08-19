import { _AccessLevelFilter } from "./_AccessLevelFilter";
import { _ListRecordHistorySearchFilter } from "./_ListRecordHistorySearchFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecordHistoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    AccessLevelFilter: {
      shape: _AccessLevelFilter
    },
    SearchFilter: {
      shape: _ListRecordHistorySearchFilter
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
