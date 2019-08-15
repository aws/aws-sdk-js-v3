import { _ValueStringList } from "./_ValueStringList";
import { _BlockDeviceMappingList } from "./_BlockDeviceMappingList";
import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { _RunInstancesMonitoringEnabled } from "./_RunInstancesMonitoringEnabled";
import { _InstanceNetworkInterfaceSpecificationList } from "./_InstanceNetworkInterfaceSpecificationList";
import { _SpotPlacement } from "./_SpotPlacement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestSpotLaunchSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroupIds: {
      shape: _ValueStringList,
      locationName: "SecurityGroupId"
    },
    SecurityGroups: {
      shape: _ValueStringList,
      locationName: "SecurityGroup"
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
    Monitoring: {
      shape: _RunInstancesMonitoringEnabled,
      locationName: "monitoring"
    },
    NetworkInterfaces: {
      shape: _InstanceNetworkInterfaceSpecificationList,
      locationName: "NetworkInterface"
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
    UserData: {
      shape: {
        type: "string"
      },
      locationName: "userData"
    }
  }
};
