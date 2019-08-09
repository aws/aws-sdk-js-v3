import { _PortRanges } from "./_PortRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateListenerInput: _Structure_ = {
  type: "structure",
  required: ["AcceleratorArn", "PortRanges", "Protocol", "IdempotencyToken"],
  members: {
    AcceleratorArn: {
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
    },
    IdempotencyToken: {
      shape: {
        type: "string"
      }
    }
  }
};
