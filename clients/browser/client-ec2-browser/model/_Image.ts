import { _ProductCodeList } from "./_ProductCodeList";
import { _BlockDeviceMappingList } from "./_BlockDeviceMappingList";
import { _StateReason } from "./_StateReason";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Image: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Architecture: {
      shape: {
        type: "string"
      },
      locationName: "architecture"
    },
    CreationDate: {
      shape: {
        type: "string"
      },
      locationName: "creationDate"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    ImageLocation: {
      shape: {
        type: "string"
      },
      locationName: "imageLocation"
    },
    ImageType: {
      shape: {
        type: "string"
      },
      locationName: "imageType"
    },
    Public: {
      shape: {
        type: "boolean"
      },
      locationName: "isPublic"
    },
    KernelId: {
      shape: {
        type: "string"
      },
      locationName: "kernelId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "imageOwnerId"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    RamdiskId: {
      shape: {
        type: "string"
      },
      locationName: "ramdiskId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "imageState"
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingList,
      locationName: "blockDeviceMapping"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    EnaSupport: {
      shape: {
        type: "boolean"
      },
      locationName: "enaSupport"
    },
    Hypervisor: {
      shape: {
        type: "string"
      },
      locationName: "hypervisor"
    },
    ImageOwnerAlias: {
      shape: {
        type: "string"
      },
      locationName: "imageOwnerAlias"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    RootDeviceName: {
      shape: {
        type: "string"
      },
      locationName: "rootDeviceName"
    },
    RootDeviceType: {
      shape: {
        type: "string"
      },
      locationName: "rootDeviceType"
    },
    SriovNetSupport: {
      shape: {
        type: "string"
      },
      locationName: "sriovNetSupport"
    },
    StateReason: {
      shape: _StateReason,
      locationName: "stateReason"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VirtualizationType: {
      shape: {
        type: "string"
      },
      locationName: "virtualizationType"
    }
  }
};
