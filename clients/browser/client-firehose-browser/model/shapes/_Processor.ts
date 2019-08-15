import { _ProcessorParameterList } from "./_ProcessorParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Processor: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ProcessorParameterList
    }
  }
};
