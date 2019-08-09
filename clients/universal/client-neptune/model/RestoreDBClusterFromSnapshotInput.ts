import { _AvailabilityZones } from "./_AvailabilityZones";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreDBClusterFromSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier", "SnapshotIdentifier", "Engine"],
  members: {
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    Tags: {
      shape: _TagList
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    EnableIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
      }
    },
    EnableCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
