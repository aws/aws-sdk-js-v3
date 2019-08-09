import { _Endpoint } from "./_Endpoint";
import { _NodeIdentifierList } from "./_NodeIdentifierList";
import { _NodeList } from "./_NodeList";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { _SecurityGroupMembershipList } from "./_SecurityGroupMembershipList";
import { _ParameterGroupStatus } from "./_ParameterGroupStatus";
import { _SSEDescription } from "./_SSEDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ClusterArn: {
      shape: {
        type: "string"
      }
    },
    TotalNodes: {
      shape: {
        type: "integer"
      }
    },
    ActiveNodes: {
      shape: {
        type: "integer"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ClusterDiscoveryEndpoint: {
      shape: _Endpoint
    },
    NodeIdsToRemove: {
      shape: _NodeIdentifierList
    },
    Nodes: {
      shape: _NodeList
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    NotificationConfiguration: {
      shape: _NotificationConfiguration
    },
    SubnetGroup: {
      shape: {
        type: "string"
      }
    },
    SecurityGroups: {
      shape: _SecurityGroupMembershipList
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    ParameterGroup: {
      shape: _ParameterGroupStatus
    },
    SSEDescription: {
      shape: _SSEDescription
    }
  }
};
