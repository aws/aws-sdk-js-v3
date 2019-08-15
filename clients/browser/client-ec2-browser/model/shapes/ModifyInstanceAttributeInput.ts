import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { _InstanceBlockDeviceMappingSpecificationList } from "./_InstanceBlockDeviceMappingSpecificationList";
import { _GroupIdStringList } from "./_GroupIdStringList";
import { _AttributeValue } from "./_AttributeValue";
import { _BlobAttributeValue } from "./_BlobAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceAttributeInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    SourceDestCheck: {
      shape: _AttributeBooleanValue
    },
    Attribute: {
      shape: {
        type: "string"
      },
      locationName: "attribute"
    },
    BlockDeviceMappings: {
      shape: _InstanceBlockDeviceMappingSpecificationList,
      locationName: "blockDeviceMapping"
    },
    DisableApiTermination: {
      shape: _AttributeBooleanValue,
      locationName: "disableApiTermination"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EbsOptimized: {
      shape: _AttributeBooleanValue,
      locationName: "ebsOptimized"
    },
    EnaSupport: {
      shape: _AttributeBooleanValue,
      locationName: "enaSupport"
    },
    Groups: {
      shape: _GroupIdStringList,
      locationName: "GroupId"
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
    Kernel: {
      shape: _AttributeValue,
      locationName: "kernel"
    },
    Ramdisk: {
      shape: _AttributeValue,
      locationName: "ramdisk"
    },
    SriovNetSupport: {
      shape: _AttributeValue,
      locationName: "sriovNetSupport"
    },
    UserData: {
      shape: _BlobAttributeValue,
      locationName: "userData"
    },
    Value: {
      shape: {
        type: "string"
      },
      locationName: "value"
    }
  }
};
