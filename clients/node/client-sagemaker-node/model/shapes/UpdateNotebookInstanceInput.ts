import { _AdditionalCodeRepositoryNamesOrUrls } from "./_AdditionalCodeRepositoryNamesOrUrls";
import { _NotebookInstanceAcceleratorTypes } from "./_NotebookInstanceAcceleratorTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNotebookInstanceInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceName"],
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
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    LifecycleConfigName: {
      shape: {
        type: "string"
      }
    },
    DisassociateLifecycleConfig: {
      shape: {
        type: "boolean"
      }
    },
    VolumeSizeInGB: {
      shape: {
        type: "integer",
        min: 5
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
    },
    AcceleratorTypes: {
      shape: _NotebookInstanceAcceleratorTypes
    },
    DisassociateAcceleratorTypes: {
      shape: {
        type: "boolean"
      }
    },
    DisassociateDefaultCodeRepository: {
      shape: {
        type: "boolean"
      }
    },
    DisassociateAdditionalCodeRepositories: {
      shape: {
        type: "boolean"
      }
    },
    RootAccess: {
      shape: {
        type: "string"
      }
    }
  }
};
