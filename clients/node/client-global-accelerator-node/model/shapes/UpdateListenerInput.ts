import { _PortRanges } from "./_PortRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateListenerInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    PortRanges: {
      shape: _PortRanges
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    ClientAffinity: {
      shape: {
        type: "string"
      }
    }
  }
};
