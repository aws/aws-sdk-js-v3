import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { _AvailableProcessorFeatureList } from "./_AvailableProcessorFeatureList";
import { _EngineModeList } from "./_EngineModeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderableDBInstanceOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    LicenseModel: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZoneList
    },
    MultiAZCapable: {
      shape: {
        type: "boolean"
      }
    },
    ReadReplicaCapable: {
      shape: {
        type: "boolean"
      }
    },
    Vpc: {
      shape: {
        type: "boolean"
      }
    },
    SupportsStorageEncryption: {
      shape: {
        type: "boolean"
      }
    },
    StorageType: {
      shape: {
        type: "string"
      }
    },
    SupportsIops: {
      shape: {
        type: "boolean"
      }
    },
    SupportsEnhancedMonitoring: {
      shape: {
        type: "boolean"
      }
    },
    SupportsIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
      }
    },
    SupportsPerformanceInsights: {
      shape: {
        type: "boolean"
      }
    },
    MinStorageSize: {
      shape: {
        type: "integer"
      }
    },
    MaxStorageSize: {
      shape: {
        type: "integer"
      }
    },
    MinIopsPerDbInstance: {
      shape: {
        type: "integer"
      }
    },
    MaxIopsPerDbInstance: {
      shape: {
        type: "integer"
      }
    },
    MinIopsPerGib: {
      shape: {
        type: "float"
      }
    },
    MaxIopsPerGib: {
      shape: {
        type: "float"
      }
    },
    AvailableProcessorFeatures: {
      shape: _AvailableProcessorFeatureList
    },
    SupportedEngineModes: {
      shape: _EngineModeList
    },
    SupportsStorageAutoscaling: {
      shape: {
        type: "boolean"
      }
    }
  }
};
