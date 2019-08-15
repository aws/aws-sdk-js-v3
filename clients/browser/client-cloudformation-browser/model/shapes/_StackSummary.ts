import { _StackDriftInformationSummary } from "./_StackDriftInformationSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSummary: _Structure_ = {
  type: "structure",
  required: ["StackName", "CreationTime", "StackStatus"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    StackName: {
      shape: {
        type: "string"
      }
    },
    TemplateDescription: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DeletionTime: {
      shape: {
        type: "timestamp"
      }
    },
    StackStatus: {
      shape: {
        type: "string"
      }
    },
    StackStatusReason: {
      shape: {
        type: "string"
      }
    },
    ParentId: {
      shape: {
        type: "string"
      }
    },
    RootId: {
      shape: {
        type: "string"
      }
    },
    DriftInformation: {
      shape: _StackDriftInformationSummary
    }
  }
};
