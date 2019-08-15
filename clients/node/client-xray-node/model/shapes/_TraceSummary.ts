import { _Http } from "./_Http";
import { _Annotations } from "./_Annotations";
import { _TraceUsers } from "./_TraceUsers";
import { _ServiceIds } from "./_ServiceIds";
import { _TraceResourceARNs } from "./_TraceResourceARNs";
import { _TraceInstanceIds } from "./_TraceInstanceIds";
import { _TraceAvailabilityZones } from "./_TraceAvailabilityZones";
import { _ServiceId } from "./_ServiceId";
import { _FaultRootCauses } from "./_FaultRootCauses";
import { _ErrorRootCauses } from "./_ErrorRootCauses";
import { _ResponseTimeRootCauses } from "./_ResponseTimeRootCauses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TraceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Duration: {
      shape: {
        type: "float"
      }
    },
    ResponseTime: {
      shape: {
        type: "float"
      }
    },
    HasFault: {
      shape: {
        type: "boolean"
      }
    },
    HasError: {
      shape: {
        type: "boolean"
      }
    },
    HasThrottle: {
      shape: {
        type: "boolean"
      }
    },
    IsPartial: {
      shape: {
        type: "boolean"
      }
    },
    Http: {
      shape: _Http
    },
    Annotations: {
      shape: _Annotations
    },
    Users: {
      shape: _TraceUsers
    },
    ServiceIds: {
      shape: _ServiceIds
    },
    ResourceARNs: {
      shape: _TraceResourceARNs
    },
    InstanceIds: {
      shape: _TraceInstanceIds
    },
    AvailabilityZones: {
      shape: _TraceAvailabilityZones
    },
    EntryPoint: {
      shape: _ServiceId
    },
    FaultRootCauses: {
      shape: _FaultRootCauses
    },
    ErrorRootCauses: {
      shape: _ErrorRootCauses
    },
    ResponseTimeRootCauses: {
      shape: _ResponseTimeRootCauses
    },
    Revision: {
      shape: {
        type: "integer"
      }
    },
    MatchedEventTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
