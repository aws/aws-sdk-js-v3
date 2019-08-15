import { _ExtensionFieldList } from "./_ExtensionFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecipientDsnFields: _Structure_ = {
  type: "structure",
  required: ["Action", "Status"],
  members: {
    FinalRecipient: {
      shape: {
        type: "string"
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    RemoteMta: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    DiagnosticCode: {
      shape: {
        type: "string"
      }
    },
    LastAttemptDate: {
      shape: {
        type: "timestamp"
      }
    },
    ExtensionFields: {
      shape: _ExtensionFieldList
    }
  }
};
