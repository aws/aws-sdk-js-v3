import { _ScheduledInstancesBlockDeviceMappingSet } from "./_ScheduledInstancesBlockDeviceMappingSet";
import { _ScheduledInstancesIamInstanceProfile } from "./_ScheduledInstancesIamInstanceProfile";
import { _ScheduledInstancesMonitoring } from "./_ScheduledInstancesMonitoring";
import { _ScheduledInstancesNetworkInterfaceSet } from "./_ScheduledInstancesNetworkInterfaceSet";
import { _ScheduledInstancesPlacement } from "./_ScheduledInstancesPlacement";
import { _ScheduledInstancesSecurityGroupIdSet } from "./_ScheduledInstancesSecurityGroupIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesLaunchSpecification: _Structure_ = {
  type: "structure",
  required: ["ImageId"],
  members: {
    BlockDeviceMappings: {
      shape: _ScheduledInstancesBlockDeviceMappingSet,
      locationName: "BlockDeviceMapping"
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    IamInstanceProfile: {
      shape: _ScheduledInstancesIamInstanceProfile
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
    Monitoring: {
      shape: _ScheduledInstancesMonitoring
    },
    NetworkInterfaces: {
      shape: _ScheduledInstancesNetworkInterfaceSet,
      locationName: "NetworkInterface"
    },
    Placement: {
      shape: _ScheduledInstancesPlacement
    },
    RamdiskId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _ScheduledInstancesSecurityGroupIdSet,
      locationName: "SecurityGroupId"
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
    }
  }
};
