import { _EnvironmentIdList } from "./_EnvironmentIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEnvironmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    environmentIds: {
      shape: _EnvironmentIdList
    }
  }
};
