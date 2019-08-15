import { _CustomerIdList } from "./_CustomerIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotifyWorkersInput: _Structure_ = {
  type: "structure",
  required: ["Subject", "MessageText", "WorkerIds"],
  members: {
    Subject: {
      shape: {
        type: "string"
      }
    },
    MessageText: {
      shape: {
        type: "string"
      }
    },
    WorkerIds: {
      shape: _CustomerIdList
    }
  }
};
