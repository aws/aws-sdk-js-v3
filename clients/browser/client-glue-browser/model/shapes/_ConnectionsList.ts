import { _OrchestrationStringList } from "./_OrchestrationStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionsList: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Connections: {
      shape: _OrchestrationStringList
    }
  }
};
