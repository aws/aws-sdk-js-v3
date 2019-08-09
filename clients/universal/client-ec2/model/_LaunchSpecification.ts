import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _BlockDeviceMappingList } from "./_BlockDeviceMappingList";
import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { _InstanceNetworkInterfaceSpecificationList } from "./_InstanceNetworkInterfaceSpecificationList";
import { _SpotPlacement } from "./_SpotPlacement";
import { _RunInstancesMonitoringEnabled } from "./_RunInstancesMonitoringEnabled";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserData: {
      shape: {
        type: "string"
      },
      locationName: "userData"
    },
    SecurityGroups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    AddressingType: {
      shape: {
        type: "string"
      },
      locationName: "addressingType"
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingList,
      locationName: "blockDeviceMapping"
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      },
      locationName: "ebsOptimized"
    },
    IamInstanceProfile: {
      shape: _IamInstanceProfileSpecification,
      locationName: "iamInstanceProfile"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    KernelId: {
      shape: {
        type: "string"
      },
      locationName: "kernelId"
    },
    KeyName: {
      shape: {
        type: "string"
      },
      locationName: "keyName"
    },
    NetworkInterfaces: {
      shape: _InstanceNetworkInterfaceSpecificationList,
      locationName: "networkInterfaceSet"
    },
    Placement: {
      shape: _SpotPlacement,
      locationName: "placement"
    },
    RamdiskId: {
      shape: {
        type: "string"
      },
      locationName: "ramdiskId"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    Monitoring: {
      shape: _RunInstancesMonitoringEnabled,
      locationName: "monitoring"
    }
  }
};
