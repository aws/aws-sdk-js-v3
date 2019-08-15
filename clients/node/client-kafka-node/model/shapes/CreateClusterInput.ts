import { _BrokerNodeGroupInfo } from "./_BrokerNodeGroupInfo";
import { _ClientAuthentication } from "./_ClientAuthentication";
import { _ConfigurationInfo } from "./_ConfigurationInfo";
import { _EncryptionInfo } from "./_EncryptionInfo";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: [
    "BrokerNodeGroupInfo",
    "KafkaVersion",
    "NumberOfBrokerNodes",
    "ClusterName"
  ],
  members: {
    BrokerNodeGroupInfo: {
      shape: _BrokerNodeGroupInfo,
      locationName: "brokerNodeGroupInfo"
    },
    ClientAuthentication: {
      shape: _ClientAuthentication,
      locationName: "clientAuthentication"
    },
    ClusterName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "clusterName"
    },
    ConfigurationInfo: {
      shape: _ConfigurationInfo,
      locationName: "configurationInfo"
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
    KafkaVersion: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "kafkaVersion"
    },
    NumberOfBrokerNodes: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "numberOfBrokerNodes"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
