import { ___listOfBrokerInstance } from "./___listOfBrokerInstance";
import { _Configurations } from "./_Configurations";
import { _EncryptionOptions } from "./_EncryptionOptions";
import { _LogsSummary } from "./_LogsSummary";
import { _WeeklyStartTime } from "./_WeeklyStartTime";
import { ___listOf__string } from "./___listOf__string";
import { ___mapOf__string } from "./___mapOf__string";
import { ___listOfUserSummary } from "./___listOfUserSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      },
      locationName: "autoMinorVersionUpgrade"
    },
    BrokerArn: {
      shape: {
        type: "string"
      },
      locationName: "brokerArn"
    },
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    },
    BrokerInstances: {
      shape: ___listOfBrokerInstance,
      locationName: "brokerInstances"
    },
    BrokerName: {
      shape: {
        type: "string"
      },
      locationName: "brokerName"
    },
    BrokerState: {
      shape: {
        type: "string"
      },
      locationName: "brokerState"
    },
    Configurations: {
      shape: _Configurations,
      locationName: "configurations"
    },
    Created: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "created"
    },
    DeploymentMode: {
      shape: {
        type: "string"
      },
      locationName: "deploymentMode"
    },
    EncryptionOptions: {
      shape: _EncryptionOptions,
      locationName: "encryptionOptions"
    },
    EngineType: {
      shape: {
        type: "string"
      },
      locationName: "engineType"
    },
    EngineVersion: {
      shape: {
        type: "string"
      },
      locationName: "engineVersion"
    },
    HostInstanceType: {
      shape: {
        type: "string"
      },
      locationName: "hostInstanceType"
    },
    Logs: {
      shape: _LogsSummary,
      locationName: "logs"
    },
    MaintenanceWindowStartTime: {
      shape: _WeeklyStartTime,
      locationName: "maintenanceWindowStartTime"
    },
    PendingEngineVersion: {
      shape: {
        type: "string"
      },
      locationName: "pendingEngineVersion"
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      },
      locationName: "publiclyAccessible"
    },
    SecurityGroups: {
      shape: ___listOf__string,
      locationName: "securityGroups"
    },
    SubnetIds: {
      shape: ___listOf__string,
      locationName: "subnetIds"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    },
    Users: {
      shape: ___listOfUserSummary,
      locationName: "users"
    }
  }
};
