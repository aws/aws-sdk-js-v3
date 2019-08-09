import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _InstanceBlockDeviceMappingList } from "./_InstanceBlockDeviceMappingList";
import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { _AttributeValue } from "./_AttributeValue";
import { _ProductCodeList } from "./_ProductCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    BlockDeviceMappings: {
      shape: _InstanceBlockDeviceMappingList,
      locationName: "blockDeviceMapping"
    },
    DisableApiTermination: {
      shape: _AttributeBooleanValue,
      locationName: "disableApiTermination"
    },
    EnaSupport: {
      shape: _AttributeBooleanValue,
      locationName: "enaSupport"
    },
    EbsOptimized: {
      shape: _AttributeBooleanValue,
      locationName: "ebsOptimized"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    InstanceInitiatedShutdownBehavior: {
      shape: _AttributeValue,
      locationName: "instanceInitiatedShutdownBehavior"
    },
    InstanceType: {
      shape: _AttributeValue,
      locationName: "instanceType"
    },
    KernelId: {
      shape: _AttributeValue,
      locationName: "kernel"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    RamdiskId: {
      shape: _AttributeValue,
      locationName: "ramdisk"
    },
    RootDeviceName: {
      shape: _AttributeValue,
      locationName: "rootDeviceName"
    },
    SourceDestCheck: {
      shape: _AttributeBooleanValue,
      locationName: "sourceDestCheck"
    },
    SriovNetSupport: {
      shape: _AttributeValue,
      locationName: "sriovNetSupport"
    },
    UserData: {
      shape: _AttributeValue,
      locationName: "userData"
    }
  }
};
