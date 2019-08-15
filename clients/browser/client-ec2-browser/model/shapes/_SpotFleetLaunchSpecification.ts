import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _BlockDeviceMappingList } from "./_BlockDeviceMappingList";
import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { _SpotFleetMonitoring } from "./_SpotFleetMonitoring";
import { _InstanceNetworkInterfaceSpecificationList } from "./_InstanceNetworkInterfaceSpecificationList";
import { _SpotPlacement } from "./_SpotPlacement";
import { _SpotFleetTagSpecificationList } from "./_SpotFleetTagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotFleetLaunchSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    Monitoring: {
      shape: _SpotFleetMonitoring,
      locationName: "monitoring"
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
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
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
    },
    WeightedCapacity: {
      shape: {
        type: "float"
      },
      locationName: "weightedCapacity"
    },
    TagSpecifications: {
      shape: _SpotFleetTagSpecificationList,
      locationName: "tagSpecificationSet"
    }
  }
};
