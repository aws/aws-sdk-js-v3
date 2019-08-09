import { _SessionManagerOutputUrl } from "./_SessionManagerOutputUrl";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Session: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Target: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StartDate: {
      shape: {
        type: "timestamp"
      }
    },
    EndDate: {
      shape: {
        type: "timestamp"
      }
    },
    DocumentName: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Details: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OutputUrl: {
      shape: _SessionManagerOutputUrl
    }
  }
};
