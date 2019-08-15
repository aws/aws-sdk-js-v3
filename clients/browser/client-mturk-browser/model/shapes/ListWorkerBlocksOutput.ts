import { _WorkerBlockList } from "./_WorkerBlockList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkerBlocksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    WorkerBlocks: {
      shape: _WorkerBlockList
    }
  }
};
