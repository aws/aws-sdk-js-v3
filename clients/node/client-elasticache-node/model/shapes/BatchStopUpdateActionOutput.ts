import { _ProcessedUpdateActionList } from "./_ProcessedUpdateActionList";
import { _UnprocessedUpdateActionList } from "./_UnprocessedUpdateActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchStopUpdateActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProcessedUpdateActions: {
      shape: _ProcessedUpdateActionList
    },
    UnprocessedUpdateActions: {
      shape: _UnprocessedUpdateActionList
    }
  }
};
