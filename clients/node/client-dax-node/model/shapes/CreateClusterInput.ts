import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { _SecurityGroupIdentifierList } from "./_SecurityGroupIdentifierList";
import { _TagList } from "./_TagList";
import { _SSESpecification } from "./_SSESpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterName", "NodeType", "ReplicationFactor", "IamRoleArn"],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ReplicationFactor: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZoneList
    },
    SubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdentifierList
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    NotificationTopicArn: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    SSESpecification: {
      shape: _SSESpecification
    }
  }
};
