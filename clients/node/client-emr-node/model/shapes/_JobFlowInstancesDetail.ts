import { _InstanceGroupDetailList } from "./_InstanceGroupDetailList";
import { _PlacementType } from "./_PlacementType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobFlowInstancesDetail: _Structure_ = {
  type: "structure",
  required: ["MasterInstanceType", "SlaveInstanceType", "InstanceCount"],
  members: {
    MasterInstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MasterPublicDnsName: {
      shape: {
        type: "string"
      }
    },
    MasterInstanceId: {
      shape: {
        type: "string"
      }
    },
    SlaveInstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    InstanceGroups: {
      shape: _InstanceGroupDetailList
    },
    NormalizedInstanceHours: {
      shape: {
        type: "integer"
      }
    },
    Ec2KeyName: {
      shape: {
        type: "string"
      }
    },
    Ec2SubnetId: {
      shape: {
        type: "string"
      }
    },
    Placement: {
      shape: _PlacementType
    },
    KeepJobFlowAliveWhenNoSteps: {
      shape: {
        type: "boolean"
      }
    },
    TerminationProtected: {
      shape: {
        type: "boolean"
      }
    },
    HadoopVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
