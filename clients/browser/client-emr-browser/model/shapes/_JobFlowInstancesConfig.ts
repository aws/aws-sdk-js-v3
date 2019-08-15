import { _InstanceGroupConfigList } from "./_InstanceGroupConfigList";
import { _InstanceFleetConfigList } from "./_InstanceFleetConfigList";
import { _PlacementType } from "./_PlacementType";
import { _XmlStringMaxLen256List } from "./_XmlStringMaxLen256List";
import { _SecurityGroupsList } from "./_SecurityGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobFlowInstancesConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MasterInstanceType: {
      shape: {
        type: "string",
        min: 1
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
      shape: _InstanceGroupConfigList
    },
    InstanceFleets: {
      shape: _InstanceFleetConfigList
    },
    Ec2KeyName: {
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
    },
    Ec2SubnetId: {
      shape: {
        type: "string"
      }
    },
    Ec2SubnetIds: {
      shape: _XmlStringMaxLen256List
    },
    EmrManagedMasterSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    EmrManagedSlaveSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    ServiceAccessSecurityGroup: {
      shape: {
        type: "string"
      }
    },
    AdditionalMasterSecurityGroups: {
      shape: _SecurityGroupsList
    },
    AdditionalSlaveSecurityGroups: {
      shape: _SecurityGroupsList
    }
  }
};
