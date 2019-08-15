import { _BlockDeviceMappingRequestList } from "./_BlockDeviceMappingRequestList";
import { _BillingProductList } from "./_BillingProductList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterImageInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    ImageLocation: {
      shape: {
        type: "string"
      }
    },
    Architecture: {
      shape: {
        type: "string"
      },
      locationName: "architecture"
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingRequestList,
      locationName: "BlockDeviceMapping"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EnaSupport: {
      shape: {
        type: "boolean"
      },
      locationName: "enaSupport"
    },
    KernelId: {
      shape: {
        type: "string"
      },
      locationName: "kernelId"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    BillingProducts: {
      shape: _BillingProductList,
      locationName: "BillingProduct"
    },
    RamdiskId: {
      shape: {
        type: "string"
      },
      locationName: "ramdiskId"
    },
    RootDeviceName: {
      shape: {
        type: "string"
      },
      locationName: "rootDeviceName"
    },
    SriovNetSupport: {
      shape: {
        type: "string"
      },
      locationName: "sriovNetSupport"
    },
    VirtualizationType: {
      shape: {
        type: "string"
      },
      locationName: "virtualizationType"
    }
  }
};
