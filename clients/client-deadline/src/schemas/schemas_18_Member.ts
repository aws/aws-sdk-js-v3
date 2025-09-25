// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMTF,
  _AMTFR,
  _AMTFRs,
  _AMTFRss,
  _AMTFRsso,
  _AMTFs,
  _AMTJ,
  _AMTJR,
  _AMTJRs,
  _AMTQ,
  _AMTQR,
  _AMTQRs,
  _end,
  _fI,
  _fIl,
  _FM,
  _FMa,
  _FMl,
  _FMle,
  _h,
  _hQ,
  _iSI,
  _jI,
  _JM,
  _JMo,
  _LFM,
  _LFMi,
  _LFMR,
  _LFMRi,
  _LFMRis,
  _LFMRist,
  _LJM,
  _LJMR,
  _LJMRi,
  _LQM,
  _LQMR,
  _LQMRi,
  _mem,
  _mL,
  _mR,
  _nT,
  _pI,
  _pT,
  _qI,
  _QM,
  _QML,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateMemberToFarmRequest = struct(n0, _AMTFR, 0, [_fI, _pI, _pT, _iSI, _mL], [[0, 1], [0, 1], 0, 0, 0]);
export var AssociateMemberToFarmResponse = struct(n0, _AMTFRs, 0, [], []);
export var AssociateMemberToFleetRequest = struct(
  n0,
  _AMTFRss,
  0,
  [_fI, _fIl, _pI, _pT, _iSI, _mL],
  [[0, 1], [0, 1], [0, 1], 0, 0, 0]
);
export var AssociateMemberToFleetResponse = struct(n0, _AMTFRsso, 0, [], []);
export var AssociateMemberToJobRequest = struct(
  n0,
  _AMTJR,
  0,
  [_fI, _qI, _jI, _pI, _pT, _iSI, _mL],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0, 0, 0]
);
export var AssociateMemberToJobResponse = struct(n0, _AMTJRs, 0, [], []);
export var AssociateMemberToQueueRequest = struct(
  n0,
  _AMTQR,
  0,
  [_fI, _qI, _pI, _pT, _iSI, _mL],
  [[0, 1], [0, 1], [0, 1], 0, 0, 0]
);
export var AssociateMemberToQueueResponse = struct(n0, _AMTQRs, 0, [], []);
export var FarmMember = struct(n0, _FM, 0, [_fI, _pI, _pT, _iSI, _mL], [0, 0, 0, 0, 0]);
export var FleetMember = struct(n0, _FMl, 0, [_fI, _fIl, _pI, _pT, _iSI, _mL], [0, 0, 0, 0, 0, 0]);
export var JobMember = struct(n0, _JM, 0, [_fI, _qI, _jI, _pI, _pT, _iSI, _mL], [0, 0, 0, 0, 0, 0, 0]);
export var ListFarmMembersRequest = struct(
  n0,
  _LFMR,
  0,
  [_fI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListFarmMembersResponse = struct(n0, _LFMRi, 0, [_mem, _nT], [() => FarmMembers, 0]);
export var ListFleetMembersRequest = struct(
  n0,
  _LFMRis,
  0,
  [_fI, _fIl, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListFleetMembersResponse = struct(n0, _LFMRist, 0, [_mem, _nT], [() => FleetMembers, 0]);
export var ListJobMembersRequest = struct(
  n0,
  _LJMR,
  0,
  [_fI, _qI, _jI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListJobMembersResponse = struct(n0, _LJMRi, 0, [_mem, _nT], [() => JobMembers, 0]);
export var ListQueueMembersRequest = struct(
  n0,
  _LQMR,
  0,
  [_fI, _qI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListQueueMembersResponse = struct(n0, _LQMRi, 0, [_mem, _nT], [() => QueueMemberList, 0]);
export var QueueMember = struct(n0, _QM, 0, [_fI, _qI, _pI, _pT, _iSI, _mL], [0, 0, 0, 0, 0, 0]);
export var FarmMembers = list(n0, _FMa, 0, () => FarmMember);
export var FleetMembers = list(n0, _FMle, 0, () => FleetMember);
export var JobMembers = list(n0, _JMo, 0, () => JobMember);
export var QueueMemberList = list(n0, _QML, 0, () => QueueMember);
export var AssociateMemberToFarm = op(
  n0,
  _AMTF,
  {
    [_end]: ["management."],
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/members/{principalId}", 200],
  },
  () => AssociateMemberToFarmRequest,
  () => AssociateMemberToFarmResponse
);
export var AssociateMemberToFleet = op(
  n0,
  _AMTFs,
  {
    [_end]: ["management."],
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}", 200],
  },
  () => AssociateMemberToFleetRequest,
  () => AssociateMemberToFleetResponse
);
export var AssociateMemberToJob = op(
  n0,
  _AMTJ,
  {
    [_end]: ["management."],
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}", 200],
  },
  () => AssociateMemberToJobRequest,
  () => AssociateMemberToJobResponse
);
export var AssociateMemberToQueue = op(
  n0,
  _AMTQ,
  {
    [_end]: ["management."],
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}", 200],
  },
  () => AssociateMemberToQueueRequest,
  () => AssociateMemberToQueueResponse
);
export var ListFarmMembers = op(
  n0,
  _LFM,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/members", 200],
  },
  () => ListFarmMembersRequest,
  () => ListFarmMembersResponse
);
export var ListFleetMembers = op(
  n0,
  _LFMi,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members", 200],
  },
  () => ListFleetMembersRequest,
  () => ListFleetMembersResponse
);
export var ListJobMembers = op(
  n0,
  _LJM,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members", 200],
  },
  () => ListJobMembersRequest,
  () => ListJobMembersResponse
);
export var ListQueueMembers = op(
  n0,
  _LQM,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/members", 200],
  },
  () => ListQueueMembersRequest,
  () => ListQueueMembersResponse
);
