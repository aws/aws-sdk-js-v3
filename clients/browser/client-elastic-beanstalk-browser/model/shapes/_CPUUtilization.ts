import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CPUUtilization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    User: {
      shape: {
        type: "float"
      }
    },
    Nice: {
      shape: {
        type: "float"
      }
    },
    System: {
      shape: {
        type: "float"
      }
    },
    Idle: {
      shape: {
        type: "float"
      }
    },
    IOWait: {
      shape: {
        type: "float"
      }
    },
    IRQ: {
      shape: {
        type: "float"
      }
    },
    SoftIRQ: {
      shape: {
        type: "float"
      }
    },
    Privileged: {
      shape: {
        type: "float"
      }
    }
  }
};
