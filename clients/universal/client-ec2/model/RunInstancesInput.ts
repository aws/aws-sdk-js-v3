import { _BlockDeviceMappingRequestList } from "./_BlockDeviceMappingRequestList";
import { _InstanceIpv6AddressList } from "./_InstanceIpv6AddressList";
import { _RunInstancesMonitoringEnabled } from "./_RunInstancesMonitoringEnabled";
import { _Placement } from "./_Placement";
import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _SecurityGroupStringList } from "./_SecurityGroupStringList";
import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { _InstanceNetworkInterfaceSpecificationList } from "./_InstanceNetworkInterfaceSpecificationList";
import { _ElasticGpuSpecifications } from "./_ElasticGpuSpecifications";
import { _ElasticInferenceAccelerators } from "./_ElasticInferenceAccelerators";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _InstanceMarketOptionsRequest } from "./_InstanceMarketOptionsRequest";
import { _CreditSpecificationRequest } from "./_CreditSpecificationRequest";
import { _CpuOptionsRequest } from "./_CpuOptionsRequest";
import { _CapacityReservationSpecification } from "./_CapacityReservationSpecification";
import { _HibernationOptionsRequest } from "./_HibernationOptionsRequest";
import { _LicenseSpecificationListRequest } from "./_LicenseSpecificationListRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunInstancesInput: _Structure_ = {
  type: "structure",
  required: ["MaxCount", "MinCount"],
  members: {
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingRequestList,
      locationName: "BlockDeviceMapping"
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
    Ipv6AddressCount: {
      shape: {
        type: "integer"
      }
    },
    Ipv6Addresses: {
      shape: _InstanceIpv6AddressList,
      locationName: "Ipv6Address"
    },
    KernelId: {
      shape: {
        type: "string"
      }
    },
    KeyName: {
      shape: {
        type: "string"
      }
    },
    MaxCount: {
      shape: {
        type: "integer"
      }
    },
    MinCount: {
      shape: {
        type: "integer"
      }
    },
    Monitoring: {
      shape: _RunInstancesMonitoringEnabled
    },
    Placement: {
      shape: _Placement
    },
    RamdiskId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdStringList,
      locationName: "SecurityGroupId"
    },
    SecurityGroups: {
      shape: _SecurityGroupStringList,
      locationName: "SecurityGroup"
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    UserData: {
      shape: {
        type: "string"
      }
    },
    AdditionalInfo: {
      shape: {
        type: "string"
      },
      locationName: "additionalInfo"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    DisableApiTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "disableApiTermination"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
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
    InstanceInitiatedShutdownBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInitiatedShutdownBehavior"
    },
    NetworkInterfaces: {
      shape: _InstanceNetworkInterfaceSpecificationList,
      locationName: "networkInterface"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    },
    ElasticGpuSpecification: {
      shape: _ElasticGpuSpecifications
    },
    ElasticInferenceAccelerators: {
      shape: _ElasticInferenceAccelerators,
      locationName: "ElasticInferenceAccelerator"
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    LaunchTemplate: {
      shape: _LaunchTemplateSpecification
    },
    InstanceMarketOptions: {
      shape: _InstanceMarketOptionsRequest
    },
    CreditSpecification: {
      shape: _CreditSpecificationRequest
    },
    CpuOptions: {
      shape: _CpuOptionsRequest
    },
    CapacityReservationSpecification: {
      shape: _CapacityReservationSpecification
    },
    HibernationOptions: {
      shape: _HibernationOptionsRequest
    },
    LicenseSpecifications: {
      shape: _LicenseSpecificationListRequest,
      locationName: "LicenseSpecification"
    }
  }
};
