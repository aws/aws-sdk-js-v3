import { _ValueStringList } from "./_ValueStringList";
import { _ErrorDetail } from "./_ErrorDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PartitionError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PartitionValues: {
      shape: _ValueStringList
    },
    ErrorDetail: {
      shape: _ErrorDetail
    }
  }
};
