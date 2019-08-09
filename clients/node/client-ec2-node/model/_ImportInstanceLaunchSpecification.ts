import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _SecurityGroupStringList } from "./_SecurityGroupStringList";
import { _Placement } from "./_Placement";
import { _UserData } from "./_UserData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportInstanceLaunchSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdditionalInfo: {
      shape: {
        type: "string"
      },
      locationName: "additionalInfo"
    },
    Architecture: {
      shape: {
        type: "string"
      },
      locationName: "architecture"
    },
    GroupIds: {
      shape: _SecurityGroupIdStringList,
      locationName: "GroupId"
    },
    GroupNames: {
      shape: _SecurityGroupStringList,
      locationName: "GroupName"
    },
    InstanceInitiatedShutdownBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInitiatedShutdownBehavior"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    Monitoring: {
      shape: {
        type: "boolean"
      },
      locationName: "monitoring"
    },
    Placement: {
      shape: _Placement,
      locationName: "placement"
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "privateIpAddress"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    UserData: {
      shape: _UserData,
      locationName: "userData"
    }
  }
};
