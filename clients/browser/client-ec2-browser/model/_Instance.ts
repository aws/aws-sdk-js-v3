import { _Monitoring } from "./_Monitoring";
import { _Placement } from "./_Placement";
import { _ProductCodeList } from "./_ProductCodeList";
import { _InstanceState } from "./_InstanceState";
import { _InstanceBlockDeviceMappingList } from "./_InstanceBlockDeviceMappingList";
import { _IamInstanceProfile } from "./_IamInstanceProfile";
import { _ElasticGpuAssociationList } from "./_ElasticGpuAssociationList";
import { _ElasticInferenceAcceleratorAssociationList } from "./_ElasticInferenceAcceleratorAssociationList";
import { _InstanceNetworkInterfaceList } from "./_InstanceNetworkInterfaceList";
import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _StateReason } from "./_StateReason";
import { _TagList } from "./_TagList";
import { _CpuOptions } from "./_CpuOptions";
import { _CapacityReservationSpecificationResponse } from "./_CapacityReservationSpecificationResponse";
import { _HibernationOptions } from "./_HibernationOptions";
import { _LicenseList } from "./_LicenseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmiLaunchIndex: {
      shape: {
        type: "integer"
      },
      locationName: "amiLaunchIndex"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
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
    LaunchTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "launchTime"
    },
    Monitoring: {
      shape: _Monitoring,
      locationName: "monitoring"
    },
    Placement: {
      shape: _Placement,
      locationName: "placement"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    PrivateDnsName: {
      shape: {
        type: "string"
      },
      locationName: "privateDnsName"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    PublicDnsName: {
      shape: {
        type: "string"
      },
      locationName: "dnsName"
    },
    PublicIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "ipAddress"
    },
    RamdiskId: {
      shape: {
        type: "string"
      },
      locationName: "ramdiskId"
    },
    State: {
      shape: _InstanceState,
      locationName: "instanceState"
    },
    StateTransitionReason: {
      shape: {
        type: "string"
      },
      locationName: "reason"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    Architecture: {
      shape: {
        type: "string"
      },
      locationName: "architecture"
    },
    BlockDeviceMappings: {
      shape: _InstanceBlockDeviceMappingList,
      locationName: "blockDeviceMapping"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      },
      locationName: "ebsOptimized"
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
    IamInstanceProfile: {
      shape: _IamInstanceProfile,
      locationName: "iamInstanceProfile"
    },
    InstanceLifecycle: {
      shape: {
        type: "string"
      },
      locationName: "instanceLifecycle"
    },
    ElasticGpuAssociations: {
      shape: _ElasticGpuAssociationList,
      locationName: "elasticGpuAssociationSet"
    },
    ElasticInferenceAcceleratorAssociations: {
      shape: _ElasticInferenceAcceleratorAssociationList,
      locationName: "elasticInferenceAcceleratorAssociationSet"
    },
    NetworkInterfaces: {
      shape: _InstanceNetworkInterfaceList,
      locationName: "networkInterfaceSet"
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
    SecurityGroups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    SourceDestCheck: {
      shape: {
        type: "boolean"
      },
      locationName: "sourceDestCheck"
    },
    SpotInstanceRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotInstanceRequestId"
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
    },
    CpuOptions: {
      shape: _CpuOptions,
      locationName: "cpuOptions"
    },
    CapacityReservationId: {
      shape: {
        type: "string"
      },
      locationName: "capacityReservationId"
    },
    CapacityReservationSpecification: {
      shape: _CapacityReservationSpecificationResponse,
      locationName: "capacityReservationSpecification"
    },
    HibernationOptions: {
      shape: _HibernationOptions,
      locationName: "hibernationOptions"
    },
    Licenses: {
      shape: _LicenseList,
      locationName: "licenseSet"
    }
  }
};
