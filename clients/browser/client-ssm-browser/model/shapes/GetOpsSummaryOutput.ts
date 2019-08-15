import { _OpsEntityList } from "./_OpsEntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOpsSummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entities: {
      shape: _OpsEntityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
