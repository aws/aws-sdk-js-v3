import { _InstanceAggregatedAssociationOverview } from "./_InstanceAggregatedAssociationOverview";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceInformation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    PingStatus: {
      shape: {
        type: "string"
      }
    },
    LastPingDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    AgentVersion: {
      shape: {
        type: "string"
      }
    },
    IsLatestVersion: {
      shape: {
        type: "boolean"
      }
    },
    PlatformType: {
      shape: {
        type: "string"
      }
    },
    PlatformName: {
      shape: {
        type: "string"
      }
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    ActivationId: {
      shape: {
        type: "string"
      }
    },
    IamRole: {
      shape: {
        type: "string"
      }
    },
    RegistrationDate: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    IPAddress: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComputerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssociationStatus: {
      shape: {
        type: "string"
      }
    },
    LastAssociationExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastSuccessfulAssociationExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    AssociationOverview: {
      shape: _InstanceAggregatedAssociationOverview
    }
  }
};
