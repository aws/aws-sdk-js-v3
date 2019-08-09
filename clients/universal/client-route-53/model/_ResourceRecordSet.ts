import { _GeoLocation } from "./_GeoLocation";
import { _ResourceRecords } from "./_ResourceRecords";
import { _AliasTarget } from "./_AliasTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceRecordSet: _Structure_ = {
  type: "structure",
  required: ["Name", "Type"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    SetIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Weight: {
      shape: {
        type: "integer"
      }
    },
    Region: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GeoLocation: {
      shape: _GeoLocation
    },
    Failover: {
      shape: {
        type: "string"
      }
    },
    MultiValueAnswer: {
      shape: {
        type: "boolean"
      }
    },
    TTL: {
      shape: {
        type: "integer"
      }
    },
    ResourceRecords: {
      shape: _ResourceRecords
    },
    AliasTarget: {
      shape: _AliasTarget
    },
    HealthCheckId: {
      shape: {
        type: "string"
      }
    },
    TrafficPolicyInstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
