import { _ClientData } from "./_ClientData";
import { _ImageDiskContainerList } from "./_ImageDiskContainerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportImageInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Architecture: {
      shape: {
        type: "string"
      }
    },
    ClientData: {
      shape: _ClientData
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DiskContainers: {
      shape: _ImageDiskContainerList,
      locationName: "DiskContainer"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    Hypervisor: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    LicenseType: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    RoleName: {
      shape: {
        type: "string"
      }
    }
  }
};
