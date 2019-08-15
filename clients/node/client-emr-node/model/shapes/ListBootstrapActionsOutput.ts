import { _CommandList } from "./_CommandList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBootstrapActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BootstrapActions: {
      shape: _CommandList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
