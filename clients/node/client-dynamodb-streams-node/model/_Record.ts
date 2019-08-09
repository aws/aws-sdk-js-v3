import { _StreamRecord } from "./_StreamRecord";
import { _Identity } from "./_Identity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Record: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventID: {
      shape: {
        type: "string"
      }
    },
    eventName: {
      shape: {
        type: "string"
      }
    },
    eventVersion: {
      shape: {
        type: "string"
      }
    },
    eventSource: {
      shape: {
        type: "string"
      }
    },
    awsRegion: {
      shape: {
        type: "string"
      }
    },
    dynamodb: {
      shape: _StreamRecord
    },
    userIdentity: {
      shape: _Identity
    }
  }
};
