import { _LaunchTemplateIamInstanceProfileSpecification } from "./_LaunchTemplateIamInstanceProfileSpecification";
import { _LaunchTemplateBlockDeviceMappingList } from "./_LaunchTemplateBlockDeviceMappingList";
import { _LaunchTemplateInstanceNetworkInterfaceSpecificationList } from "./_LaunchTemplateInstanceNetworkInterfaceSpecificationList";
import { _LaunchTemplatesMonitoring } from "./_LaunchTemplatesMonitoring";
import { _LaunchTemplatePlacement } from "./_LaunchTemplatePlacement";
import { _LaunchTemplateTagSpecificationList } from "./_LaunchTemplateTagSpecificationList";
import { _ElasticGpuSpecificationResponseList } from "./_ElasticGpuSpecificationResponseList";
import { _LaunchTemplateElasticInferenceAcceleratorResponseList } from "./_LaunchTemplateElasticInferenceAcceleratorResponseList";
import { _ValueStringList } from "./_ValueStringList";
import { _LaunchTemplateInstanceMarketOptions } from "./_LaunchTemplateInstanceMarketOptions";
import { _CreditSpecification } from "./_CreditSpecification";
import { _LaunchTemplateCpuOptions } from "./_LaunchTemplateCpuOptions";
import { _LaunchTemplateCapacityReservationSpecificationResponse } from "./_LaunchTemplateCapacityReservationSpecificationResponse";
import { _LaunchTemplateLicenseList } from "./_LaunchTemplateLicenseList";
import { _LaunchTemplateHibernationOptions } from "./_LaunchTemplateHibernationOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseLaunchTemplateData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KernelId: {
      shape: {
        type: "string"
      },
      locationName: "kernelId"
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      },
      locationName: "ebsOptimized"
    },
    IamInstanceProfile: {
      shape: _LaunchTemplateIamInstanceProfileSpecification,
      locationName: "iamInstanceProfile"
    },
    BlockDeviceMappings: {
      shape: _LaunchTemplateBlockDeviceMappingList,
      locationName: "blockDeviceMappingSet"
    },
    NetworkInterfaces: {
      shape: _LaunchTemplateInstanceNetworkInterfaceSpecificationList,
      locationName: "networkInterfaceSet"
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
    KeyName: {
      shape: {
        type: "string"
      },
      locationName: "keyName"
    },
    Monitoring: {
      shape: _LaunchTemplatesMonitoring,
      locationName: "monitoring"
    },
    Placement: {
      shape: _LaunchTemplatePlacement,
      locationName: "placement"
    },
    RamDiskId: {
      shape: {
        type: "string"
      },
      locationName: "ramDiskId"
    },
    DisableApiTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "disableApiTermination"
    },
    InstanceInitiatedShutdownBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInitiatedShutdownBehavior"
    },
    UserData: {
      shape: {
        type: "string"
      },
      locationName: "userData"
    },
    TagSpecifications: {
      shape: _LaunchTemplateTagSpecificationList,
      locationName: "tagSpecificationSet"
    },
    ElasticGpuSpecifications: {
      shape: _ElasticGpuSpecificationResponseList,
      locationName: "elasticGpuSpecificationSet"
    },
    ElasticInferenceAccelerators: {
      shape: _LaunchTemplateElasticInferenceAcceleratorResponseList,
      locationName: "elasticInferenceAcceleratorSet"
    },
    SecurityGroupIds: {
      shape: _ValueStringList,
      locationName: "securityGroupIdSet"
    },
    SecurityGroups: {
      shape: _ValueStringList,
      locationName: "securityGroupSet"
    },
    InstanceMarketOptions: {
      shape: _LaunchTemplateInstanceMarketOptions,
      locationName: "instanceMarketOptions"
    },
    CreditSpecification: {
      shape: _CreditSpecification,
      locationName: "creditSpecification"
    },
    CpuOptions: {
      shape: _LaunchTemplateCpuOptions,
      locationName: "cpuOptions"
    },
    CapacityReservationSpecification: {
      shape: _LaunchTemplateCapacityReservationSpecificationResponse,
      locationName: "capacityReservationSpecification"
    },
    LicenseSpecifications: {
      shape: _LaunchTemplateLicenseList,
      locationName: "licenseSet"
    },
    HibernationOptions: {
      shape: _LaunchTemplateHibernationOptions,
      locationName: "hibernationOptions"
    }
  }
};
