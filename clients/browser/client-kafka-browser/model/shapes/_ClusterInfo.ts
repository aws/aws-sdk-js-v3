import { _BrokerNodeGroupInfo } from "./_BrokerNodeGroupInfo";
import { _ClientAuthentication } from "./_ClientAuthentication";
import { _BrokerSoftwareInfo } from "./_BrokerSoftwareInfo";
import { _EncryptionInfo } from "./_EncryptionInfo";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActiveOperationArn: {
      shape: {
        type: "string"
      },
      locationName: "activeOperationArn"
    },
    BrokerNodeGroupInfo: {
      shape: _BrokerNodeGroupInfo,
      locationName: "brokerNodeGroupInfo"
    },
    ClientAuthentication: {
      shape: _ClientAuthentication,
      locationName: "clientAuthentication"
    },
    ClusterArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterArn"
    },
    ClusterName: {
      shape: {
        type: "string"
      },
      locationName: "clusterName"
    },
    CreationTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "creationTime"
    },
    CurrentBrokerSoftwareInfo: {
      shape: _BrokerSoftwareInfo,
      locationName: "currentBrokerSoftwareInfo"
    },
    CurrentVersion: {
      shape: {
        type: "string"
      },
      locationName: "currentVersion"
    },
    EncryptionInfo: {
      shape: _EncryptionInfo,
      locationName: "encryptionInfo"
    },
    EnhancedMonitoring: {
      shape: {
        type: "string"
      },
      locationName: "enhancedMonitoring"
    },
    NumberOfBrokerNodes: {
      shape: {
        type: "integer"
      },
      locationName: "numberOfBrokerNodes"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    },
    ZookeeperConnectString: {
      shape: {
        type: "string"
      },
      locationName: "zookeeperConnectString"
    }
  }
};
