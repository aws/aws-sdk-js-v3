import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancesCount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Assigning: {
      shape: {
        type: "integer"
      }
    },
    Booting: {
      shape: {
        type: "integer"
      }
    },
    ConnectionLost: {
      shape: {
        type: "integer"
      }
    },
    Deregistering: {
      shape: {
        type: "integer"
      }
    },
    Online: {
      shape: {
        type: "integer"
      }
    },
    Pending: {
      shape: {
        type: "integer"
      }
    },
    Rebooting: {
      shape: {
        type: "integer"
      }
    },
    Registered: {
      shape: {
        type: "integer"
      }
    },
    Registering: {
      shape: {
        type: "integer"
      }
    },
    Requested: {
      shape: {
        type: "integer"
      }
    },
    RunningSetup: {
      shape: {
        type: "integer"
      }
    },
    SetupFailed: {
      shape: {
        type: "integer"
      }
    },
    ShuttingDown: {
      shape: {
        type: "integer"
      }
    },
    StartFailed: {
      shape: {
        type: "integer"
      }
    },
    StopFailed: {
      shape: {
        type: "integer"
      }
    },
    Stopped: {
      shape: {
        type: "integer"
      }
    },
    Stopping: {
      shape: {
        type: "integer"
      }
    },
    Terminated: {
      shape: {
        type: "integer"
      }
    },
    Terminating: {
      shape: {
        type: "integer"
      }
    },
    Unassigning: {
      shape: {
        type: "integer"
      }
    }
  }
};
