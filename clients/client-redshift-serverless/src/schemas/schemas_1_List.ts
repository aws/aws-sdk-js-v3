// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationException as __InvalidPaginationException } from "../models/index";
import {
  _c,
  _cD,
  _e,
  _hE,
  _hQ,
  _IPE,
  _LMW,
  _LMWR,
  _LMWRi,
  _LR,
  _LRO,
  _LROR,
  _LRORi,
  _LRR,
  _LRRi,
  _LSA,
  _LSAR,
  _LSARi,
  _LSCC,
  _LSCCR,
  _LSCCRi,
  _LT,
  _LTR,
  _LTRi,
  _LTRS,
  _LTRSR,
  _LTRSRi,
  _LUL,
  _LULR,
  _LULRi,
  _m,
  _mR,
  _MW,
  _mW,
  _mWI,
  _MWLI,
  _mWN,
  _nN,
  _nT,
  _rAe,
  _RL,
  _rL,
  _ROL,
  _rOL,
  _SAA,
  _sAc,
  _SAL,
  _sAN,
  _sAo,
  _SCCn,
  _sCCn,
  _st,
  _TLr,
  _tra,
  _tRSa,
  _TRSL,
  _ULs,
  _uLs,
  _uT,
  _wN,
  n0,
} from "./schemas_0";
import { SnapshotCopyConfiguration } from "./schemas_7_Snapshot";
import { UsageLimit } from "./schemas_9_Usage";
import { TableRestoreStatus } from "./schemas_11_Table";
import { Reservation, ReservationOffering } from "./schemas_12_Reservation";
import { ServerlessTrack } from "./schemas_14_Workgroup";

/* eslint no-var: 0 */

export var InvalidPaginationException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPaginationException
);
export var ListManagedWorkgroupsRequest = struct(
  n0,
  _LMWR,
  0,
  [_sAo, _nT, _mR],
  [
    0,
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
export var ListManagedWorkgroupsResponse = struct(n0, _LMWRi, 0, [_nT, _mW], [0, () => ManagedWorkgroups]);
export var ListReservationOfferingsRequest = struct(
  n0,
  _LROR,
  0,
  [_nT, _mR],
  [
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
export var ListReservationOfferingsResponse = struct(n0, _LRORi, 0, [_rOL, _nT], [() => ReservationOfferingsList, 0]);
export var ListReservationsRequest = struct(
  n0,
  _LRR,
  0,
  [_nT, _mR],
  [
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
export var ListReservationsResponse = struct(n0, _LRRi, 0, [_rL, _nT], [() => ReservationsList, 0]);
export var ListScheduledActionsRequest = struct(
  n0,
  _LSAR,
  0,
  [_nT, _mR, _nN],
  [
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
    0,
  ]
);
export var ListScheduledActionsResponse = struct(n0, _LSARi, 0, [_nT, _sAc], [0, () => ScheduledActionsList]);
export var ListSnapshotCopyConfigurationsRequest = struct(
  n0,
  _LSCCR,
  0,
  [_nN, _nT, _mR],
  [
    0,
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
export var ListSnapshotCopyConfigurationsResponse = struct(
  n0,
  _LSCCRi,
  0,
  [_nT, _sCCn],
  [0, () => SnapshotCopyConfigurations]
);
export var ListTableRestoreStatusRequest = struct(
  n0,
  _LTRSR,
  0,
  [_nT, _mR, _nN, _wN],
  [
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
    0,
    0,
  ]
);
export var ListTableRestoreStatusResponse = struct(n0, _LTRSRi, 0, [_nT, _tRSa], [0, () => TableRestoreStatusList]);
export var ListTracksRequest = struct(
  n0,
  _LTR,
  0,
  [_nT, _mR],
  [
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
export var ListTracksResponse = struct(n0, _LTRi, 0, [_tra, _nT], [() => TrackList, 0]);
export var ListUsageLimitsRequest = struct(
  n0,
  _LULR,
  0,
  [_rAe, _uT, _nT, _mR],
  [
    0,
    0,
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
export var ListUsageLimitsResponse = struct(n0, _LULRi, 0, [_uLs, _nT], [() => UsageLimits, 0]);
export var ManagedWorkgroupListItem = struct(n0, _MWLI, 0, [_mWN, _mWI, _sAo, _st, _cD], [0, 0, 0, 0, 5]);
export var ScheduledActionAssociation = struct(n0, _SAA, 0, [_nN, _sAN], [0, 0]);
export var Unit = "unit" as const;

export var ManagedWorkgroups = list(n0, _MW, 0, () => ManagedWorkgroupListItem);
export var ReservationOfferingsList = list(n0, _ROL, 0, () => ReservationOffering);
export var ReservationsList = list(n0, _RL, 0, () => Reservation);
export var ScheduledActionsList = list(n0, _SAL, 0, () => ScheduledActionAssociation);
export var SnapshotCopyConfigurations = list(n0, _SCCn, 0, () => SnapshotCopyConfiguration);
export var TableRestoreStatusList = list(n0, _TRSL, 0, () => TableRestoreStatus);
export var TrackList = list(n0, _TLr, 0, () => ServerlessTrack);
export var UsageLimits = list(n0, _ULs, 0, () => UsageLimit);
export var ListManagedWorkgroups = op(
  n0,
  _LMW,
  0,
  () => ListManagedWorkgroupsRequest,
  () => ListManagedWorkgroupsResponse
);
export var ListReservationOfferings = op(
  n0,
  _LRO,
  0,
  () => ListReservationOfferingsRequest,
  () => ListReservationOfferingsResponse
);
export var ListReservations = op(
  n0,
  _LR,
  0,
  () => ListReservationsRequest,
  () => ListReservationsResponse
);
export var ListScheduledActions = op(
  n0,
  _LSA,
  0,
  () => ListScheduledActionsRequest,
  () => ListScheduledActionsResponse
);
export var ListSnapshotCopyConfigurations = op(
  n0,
  _LSCC,
  0,
  () => ListSnapshotCopyConfigurationsRequest,
  () => ListSnapshotCopyConfigurationsResponse
);
export var ListTableRestoreStatus = op(
  n0,
  _LTRS,
  0,
  () => ListTableRestoreStatusRequest,
  () => ListTableRestoreStatusResponse
);
export var ListTracks = op(
  n0,
  _LT,
  0,
  () => ListTracksRequest,
  () => ListTracksResponse
);
export var ListUsageLimits = op(
  n0,
  _LUL,
  0,
  () => ListUsageLimitsRequest,
  () => ListUsageLimitsResponse
);
