import { _PortRanges } from "./_PortRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Listener: _Structure_ = {
  type: "structure",
  required: [],
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
