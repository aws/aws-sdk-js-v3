import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProcessDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Path: {
      shape: {
        type: "string"
      }
    },
    Pid: {
      shape: {
        type: "integer"
      }
    },
    ParentPid: {
      shape: {
        type: "integer"
      }
    },
    LaunchedAt: {
      shape: {
        type: "string"
      }
    },
    TerminatedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
