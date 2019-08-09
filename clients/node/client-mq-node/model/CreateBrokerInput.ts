import { _ConfigurationId } from "./_ConfigurationId";
import { _EncryptionOptions } from "./_EncryptionOptions";
import { _Logs } from "./_Logs";
import { _WeeklyStartTime } from "./_WeeklyStartTime";
import { ___listOf__string } from "./___listOf__string";
import { ___mapOf__string } from "./___mapOf__string";
import { ___listOfUser } from "./___listOfUser";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBrokerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      },
      locationName: "autoMinorVersionUpgrade"
    },
    BrokerName: {
      shape: {
        type: "string"
      },
      locationName: "brokerName"
    },
    Configuration: {
      shape: _ConfigurationId,
      locationName: "configuration"
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      },
      locationName: "creatorRequestId"
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
      shape: _Logs,
      locationName: "logs"
    },
    MaintenanceWindowStartTime: {
      shape: _WeeklyStartTime,
      locationName: "maintenanceWindowStartTime"
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
      shape: ___listOfUser,
      locationName: "users"
    }
  }
};
