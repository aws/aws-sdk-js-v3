import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCapacityReservationInput: _Structure_ = {
  type: "structure",
  required: ["InstanceType", "InstancePlatform", "InstanceCount"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    InstancePlatform: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZoneId: {
      shape: {
        type: "string"
      }
    },
    Tenancy: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    EphemeralStorage: {
      shape: {
        type: "boolean"
      }
    },
    EndDate: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateType: {
      shape: {
        type: "string"
      }
    },
    InstanceMatchCriteria: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
