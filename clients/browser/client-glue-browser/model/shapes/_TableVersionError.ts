import { _ErrorDetail } from "./_ErrorDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableVersionError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorDetail: {
      shape: _ErrorDetail
    }
  }
};
