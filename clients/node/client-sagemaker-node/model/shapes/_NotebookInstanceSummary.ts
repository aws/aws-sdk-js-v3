import { _AdditionalCodeRepositoryNamesOrUrls } from "./_AdditionalCodeRepositoryNamesOrUrls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotebookInstanceSummary: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceName", "NotebookInstanceArn"],
  members: {
    NotebookInstanceName: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceArn: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceStatus: {
      shape: {
        type: "string"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    NotebookInstanceLifecycleConfigName: {
      shape: {
        type: "string"
      }
    },
    DefaultCodeRepository: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdditionalCodeRepositories: {
      shape: _AdditionalCodeRepositoryNamesOrUrls
    }
  }
};
