import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { _NotebookInstanceAcceleratorTypes } from "./_NotebookInstanceAcceleratorTypes";
import { _AdditionalCodeRepositoryNamesOrUrls } from "./_AdditionalCodeRepositoryNamesOrUrls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotebookInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotebookInstanceArn: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceName: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
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
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroups: {
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
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    NotebookInstanceLifecycleConfigName: {
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
