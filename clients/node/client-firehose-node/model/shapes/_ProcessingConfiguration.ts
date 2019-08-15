import { _ProcessorList } from "./_ProcessorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProcessingConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Processors: {
      shape: _ProcessorList
    }
  }
};
