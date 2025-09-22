// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CO,
  _DDe,
  _DF,
  _DN,
  _DSD,
  _DSDR,
  _DSDRe,
  _DU,
  _EK,
  _End,
  _ESA,
  _ESDD,
  _ESN,
  _GES,
  _GESR,
  _GESRe,
  _GSS,
  _GSSR,
  _GSSRe,
  _h,
  _jN,
  _M,
  _R,
  _RA,
  _RO,
  _SDN,
  _SI,
  _SM,
  _SS,
  _St,
  _Sta,
  _Star,
  _Ta,
  _U,
  _Un,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConditionOverrides = struct(n0, _CO, 8, [_R], [() => RangeOverride]);
export var DeleteSegmentDefinitionRequest = struct(
  n0,
  _DSDR,
  0,
  [_DN, _SDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSegmentDefinitionResponse = struct(
  n0,
  _DSDRe,
  0,
  [_M],
  [
    [
      0,
      {
        [_jN]: _M,
      },
    ],
  ]
);
export var EventStreamDestinationDetails = struct(n0, _ESDD, 0, [_U, _Sta, _US, _M], [0, 0, 4, 0]);
export var GetEventStreamRequest = struct(
  n0,
  _GESR,
  0,
  [_DN, _ESN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEventStreamResponse = struct(
  n0,
  _GESRe,
  0,
  [_DN, _ESA, _CA, _St, _SS, _DDe, _Ta],
  [0, 0, 4, 0, 4, () => EventStreamDestinationDetails, 128 | 0]
);
export var GetSegmentSnapshotRequest = struct(
  n0,
  _GSSR,
  0,
  [_DN, _SDN, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSegmentSnapshotResponse = struct(
  n0,
  _GSSRe,
  0,
  [_SI, _Sta, _SM, _DF, _EK, _RA, _DU],
  [0, 0, 0, 0, 0, 0, 0]
);
export var RangeOverride = struct(n0, _RO, 0, [_Star, _End, _Un], [1, 1, 0]);
export var DeleteSegmentDefinition = op(
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}", 200],
  },
  () => DeleteSegmentDefinitionRequest,
  () => DeleteSegmentDefinitionResponse
);
export var GetEventStream = op(
  n0,
  _GES,
  {
    [_h]: ["GET", "/domains/{DomainName}/event-streams/{EventStreamName}", 200],
  },
  () => GetEventStreamRequest,
  () => GetEventStreamResponse
);
export var GetSegmentSnapshot = op(
  n0,
  _GSS,
  {
    [_h]: ["GET", "/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots/{SnapshotId}", 200],
  },
  () => GetSegmentSnapshotRequest,
  () => GetSegmentSnapshotResponse
);
