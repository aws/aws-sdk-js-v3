import { _LaunchTemplateIamInstanceProfileSpecificationRequest } from "./_LaunchTemplateIamInstanceProfileSpecificationRequest";
import { _LaunchTemplateBlockDeviceMappingRequestList } from "./_LaunchTemplateBlockDeviceMappingRequestList";
import { _LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList } from "./_LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList";
import { _LaunchTemplatesMonitoringRequest } from "./_LaunchTemplatesMonitoringRequest";
import { _LaunchTemplatePlacementRequest } from "./_LaunchTemplatePlacementRequest";
import { _LaunchTemplateTagSpecificationRequestList } from "./_LaunchTemplateTagSpecificationRequestList";
import { _ElasticGpuSpecificationList } from "./_ElasticGpuSpecificationList";
import { _LaunchTemplateElasticInferenceAcceleratorList } from "./_LaunchTemplateElasticInferenceAcceleratorList";
import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _SecurityGroupStringList } from "./_SecurityGroupStringList";
import { _LaunchTemplateInstanceMarketOptionsRequest } from "./_LaunchTemplateInstanceMarketOptionsRequest";
import { _CreditSpecificationRequest } from "./_CreditSpecificationRequest";
import { _LaunchTemplateCpuOptionsRequest } from "./_LaunchTemplateCpuOptionsRequest";
import { _LaunchTemplateCapacityReservationSpecificationRequest } from "./_LaunchTemplateCapacityReservationSpecificationRequest";
import { _LaunchTemplateLicenseSpecificationListRequest } from "./_LaunchTemplateLicenseSpecificationListRequest";
import { _LaunchTemplateHibernationOptionsRequest } from "./_LaunchTemplateHibernationOptionsRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestLaunchTemplateData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KernelId: {
      shape: {
        type: "string"
      }
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    IamInstanceProfile: {
      shape: _LaunchTemplateIamInstanceProfileSpecificationRequest
    },
    BlockDeviceMappings: {
      shape: _LaunchTemplateBlockDeviceMappingRequestList,
      locationName: "BlockDeviceMapping"
    },
    NetworkInterfaces: {
      shape: _LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList,
      locationName: "NetworkInterface"
    },
    ImageId: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    KeyName: {
      shape: {
        type: "string"
      }
    },
    Monitoring: {
      shape: _LaunchTemplatesMonitoringRequest
    },
    Placement: {
      shape: _LaunchTemplatePlacementRequest
    },
    RamDiskId: {
      shape: {
        type: "string"
      }
    },
    DisableApiTermination: {
      shape: {
        type: "boolean"
      }
    },
    InstanceInitiatedShutdownBehavior: {
      shape: {
        type: "string"
      }
    },
    UserData: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _LaunchTemplateTagSpecificationRequestList,
      locationName: "TagSpecification"
    },
    ElasticGpuSpecifications: {
      shape: _ElasticGpuSpecificationList,
      locationName: "ElasticGpuSpecification"
    },
    ElasticInferenceAccelerators: {
      shape: _LaunchTemplateElasticInferenceAcceleratorList,
      locationName: "ElasticInferenceAccelerator"
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdStringList,
      locationName: "SecurityGroupId"
    },
    SecurityGroups: {
      shape: _SecurityGroupStringList,
      locationName: "SecurityGroup"
    },
    InstanceMarketOptions: {
      shape: _LaunchTemplateInstanceMarketOptionsRequest
    },
    CreditSpecification: {
      shape: _CreditSpecificationRequest
    },
    CpuOptions: {
      shape: _LaunchTemplateCpuOptionsRequest
    },
    CapacityReservationSpecification: {
      shape: _LaunchTemplateCapacityReservationSpecificationRequest
    },
    LicenseSpecifications: {
      shape: _LaunchTemplateLicenseSpecificationListRequest,
      locationName: "LicenseSpecification"
    },
    HibernationOptions: {
      shape: _LaunchTemplateHibernationOptionsRequest
    }
  }
};
