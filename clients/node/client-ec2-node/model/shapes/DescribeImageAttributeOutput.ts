import { _BlockDeviceMappingList } from "./_BlockDeviceMappingList";
import { _LaunchPermissionList } from "./_LaunchPermissionList";
import { _ProductCodeList } from "./_ProductCodeList";
import { _AttributeValue } from "./_AttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImageAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingList,
      locationName: "blockDeviceMapping"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    LaunchPermissions: {
      shape: _LaunchPermissionList,
      locationName: "launchPermission"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    Description: {
      shape: _AttributeValue,
      locationName: "description"
    },
    KernelId: {
      shape: _AttributeValue,
      locationName: "kernel"
    },
    RamdiskId: {
      shape: _AttributeValue,
      locationName: "ramdisk"
    },
    SriovNetSupport: {
      shape: _AttributeValue,
      locationName: "sriovNetSupport"
    }
  }
};
