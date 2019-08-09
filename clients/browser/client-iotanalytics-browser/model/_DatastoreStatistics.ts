import { _EstimatedResourceSize } from "./_EstimatedResourceSize";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatastoreStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    size: {
      shape: _EstimatedResourceSize
    }
  }
};
