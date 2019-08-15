import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { _TagList } from "./_TagList";
import { _NotebookInstanceAcceleratorTypes } from "./_NotebookInstanceAcceleratorTypes";
import { _AdditionalCodeRepositoryNamesOrUrls } from "./_AdditionalCodeRepositoryNamesOrUrls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNotebookInstanceInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceName", "InstanceType", "RoleArn"],
  members: {
    NotebookInstanceName: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    LifecycleConfigName: {
      shape: {
        type: "string"
      }
    },
    DirectInternetAccess: {
      shape: {
        type: "string"
      }
    },
    VolumeSizeInGB: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    AcceleratorTypes: {
      shape: _NotebookInstanceAcceleratorTypes
    },
    DefaultCodeRepository: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdditionalCodeRepositories: {
      shape: _AdditionalCodeRepositoryNamesOrUrls
    },
    RootAccess: {
      shape: {
        type: "string"
      }
    }
  }
};
