// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Al,
  _BVAI,
  _BVN,
  _CRI,
  _CRTP,
  _CRTPI,
  _CRTPO,
  _CRTS,
  _CRTSI,
  _CRTSO,
  _CTr,
  _DRTP,
  _DRTPI,
  _DRTS,
  _DRTSI,
  _EV,
  _GRTIM,
  _GRTIMI,
  _GRTIMO,
  _GRTP,
  _GRTPI,
  _GRTPO,
  _GRTS,
  _GRTSI,
  _GRTSO,
  _h,
  _hQ,
  _IM,
  _IRA,
  _IV,
  _K,
  _KV,
  _KVL,
  _LET,
  _LRTP,
  _LRTPI,
  _LRTPO,
  _LRTS,
  _LRTSI,
  _LRTSO,
  _LUT,
  _MR,
  _NT,
  _PRA,
  _PRC,
  _PRT,
  _RMO,
  _RPA,
  _RPS,
  _RPTec,
  _RTP,
  _RTPA,
  _RTPe,
  _RTPFC,
  _RTPFG,
  _RTPFL,
  _RTPFU,
  _RTPN,
  _RTRPS,
  _RTS,
  _RTSe,
  _RTSFC,
  _RTSFG,
  _RTSFL,
  _RTSFU,
  _RTSN,
  _SE,
  _SET,
  _SEt,
  _SNE,
  _SSM,
  _SWD,
  _SWH,
  _Ta,
  _URTP,
  _URTPI,
  _URTPO,
  _URTS,
  _URTSI,
  _URTSO,
  _UT,
  _V,
  _VWH,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRestoreTestingPlanInput = struct(
  n0,
  _CRTPI,
  0,
  [_CRI, _RTP, _Ta],
  [0, () => RestoreTestingPlanForCreate, [() => SensitiveStringMap, 0]]
);
export var CreateRestoreTestingPlanOutput = struct(n0, _CRTPO, 0, [_CTr, _RTPA, _RTPN], [4, 0, 0]);
export var CreateRestoreTestingSelectionInput = struct(
  n0,
  _CRTSI,
  0,
  [_CRI, _RTPN, _RTS],
  [0, [0, 1], [() => RestoreTestingSelectionForCreate, 0]]
);
export var CreateRestoreTestingSelectionOutput = struct(n0, _CRTSO, 0, [_CTr, _RTPA, _RTPN, _RTSN], [4, 0, 0, 0]);
export var DeleteRestoreTestingPlanInput = struct(n0, _DRTPI, 0, [_RTPN], [[0, 1]]);
export var DeleteRestoreTestingSelectionInput = struct(
  n0,
  _DRTSI,
  0,
  [_RTPN, _RTSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRestoreTestingInferredMetadataInput = struct(
  n0,
  _GRTIMI,
  0,
  [_BVAI, _BVN, _RPA],
  [
    [
      0,
      {
        [_hQ]: _BVAI,
      },
    ],
    [
      0,
      {
        [_hQ]: _BVN,
      },
    ],
    [
      0,
      {
        [_hQ]: _RPA,
      },
    ],
  ]
);
export var GetRestoreTestingInferredMetadataOutput = struct(n0, _GRTIMO, 0, [_IM], [128 | 0]);
export var GetRestoreTestingPlanInput = struct(n0, _GRTPI, 0, [_RTPN], [[0, 1]]);
export var GetRestoreTestingPlanOutput = struct(n0, _GRTPO, 0, [_RTP], [() => RestoreTestingPlanForGet]);
export var GetRestoreTestingSelectionInput = struct(
  n0,
  _GRTSI,
  0,
  [_RTPN, _RTSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRestoreTestingSelectionOutput = struct(n0, _GRTSO, 0, [_RTS], [[() => RestoreTestingSelectionForGet, 0]]);
export var KeyValue = struct(n0, _KV, 0, [_K, _V], [0, 0]);
export var ListRestoreTestingPlansInput = struct(
  n0,
  _LRTPI,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListRestoreTestingPlansOutput = struct(n0, _LRTPO, 0, [_NT, _RTPe], [0, () => RestoreTestingPlans]);
export var ListRestoreTestingSelectionsInput = struct(
  n0,
  _LRTSI,
  0,
  [_MR, _NT, _RTPN],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [0, 1],
  ]
);
export var ListRestoreTestingSelectionsOutput = struct(
  n0,
  _LRTSO,
  0,
  [_NT, _RTSe],
  [0, () => RestoreTestingSelections]
);
export var ProtectedResourceConditions = struct(n0, _PRC, 0, [_SEt, _SNE], [() => KeyValueList, () => KeyValueList]);
export var RestoreTestingPlanForCreate = struct(
  n0,
  _RTPFC,
  0,
  [_RPS, _RTPN, _SE, _SET, _SWH],
  [() => RestoreTestingRecoveryPointSelection, 0, 0, 0, 1]
);
export var RestoreTestingPlanForGet = struct(
  n0,
  _RTPFG,
  0,
  [_CTr, _CRI, _LET, _LUT, _RPS, _RTPA, _RTPN, _SE, _SET, _SWH],
  [4, 0, 4, 4, () => RestoreTestingRecoveryPointSelection, 0, 0, 0, 0, 1]
);
export var RestoreTestingPlanForList = struct(
  n0,
  _RTPFL,
  0,
  [_CTr, _LET, _LUT, _RTPA, _RTPN, _SE, _SET, _SWH],
  [4, 4, 4, 0, 0, 0, 0, 1]
);
export var RestoreTestingPlanForUpdate = struct(
  n0,
  _RTPFU,
  0,
  [_RPS, _SE, _SET, _SWH],
  [() => RestoreTestingRecoveryPointSelection, 0, 0, 1]
);
export var RestoreTestingRecoveryPointSelection = struct(
  n0,
  _RTRPS,
  0,
  [_Al, _EV, _IV, _RPTec, _SWD],
  [0, 64 | 0, 64 | 0, 64 | 0, 1]
);
export var RestoreTestingSelectionForCreate = struct(
  n0,
  _RTSFC,
  0,
  [_IRA, _PRA, _PRC, _PRT, _RMO, _RTSN, _VWH],
  [0, 64 | 0, () => ProtectedResourceConditions, 0, [() => SensitiveStringMap, 0], 0, 1]
);
export var RestoreTestingSelectionForGet = struct(
  n0,
  _RTSFG,
  0,
  [_CTr, _CRI, _IRA, _PRA, _PRC, _PRT, _RMO, _RTPN, _RTSN, _VWH],
  [4, 0, 0, 64 | 0, () => ProtectedResourceConditions, 0, [() => SensitiveStringMap, 0], 0, 0, 1]
);
export var RestoreTestingSelectionForList = struct(
  n0,
  _RTSFL,
  0,
  [_CTr, _IRA, _PRT, _RTPN, _RTSN, _VWH],
  [4, 0, 0, 0, 0, 1]
);
export var RestoreTestingSelectionForUpdate = struct(
  n0,
  _RTSFU,
  0,
  [_IRA, _PRA, _PRC, _RMO, _VWH],
  [0, 64 | 0, () => ProtectedResourceConditions, [() => SensitiveStringMap, 0], 1]
);
export var UpdateRestoreTestingPlanInput = struct(
  n0,
  _URTPI,
  0,
  [_RTP, _RTPN],
  [() => RestoreTestingPlanForUpdate, [0, 1]]
);
export var UpdateRestoreTestingPlanOutput = struct(n0, _URTPO, 0, [_CTr, _RTPA, _RTPN, _UT], [4, 0, 0, 4]);
export var UpdateRestoreTestingSelectionInput = struct(
  n0,
  _URTSI,
  0,
  [_RTPN, _RTS, _RTSN],
  [
    [0, 1],
    [() => RestoreTestingSelectionForUpdate, 0],
    [0, 1],
  ]
);
export var UpdateRestoreTestingSelectionOutput = struct(
  n0,
  _URTSO,
  0,
  [_CTr, _RTPA, _RTPN, _RTSN, _UT],
  [4, 0, 0, 0, 4]
);
export var KeyValueList = list(n0, _KVL, 0, () => KeyValue);
export var RestoreTestingPlans = list(n0, _RTPe, 0, () => RestoreTestingPlanForList);
export var RestoreTestingRecoveryPointTypeList = 64 | 0;

export var RestoreTestingSelections = list(n0, _RTSe, 0, () => RestoreTestingSelectionForList);
export var SensitiveStringMap = map(n0, _SSM, 8, 0, 0);
export var CreateRestoreTestingPlan = op(
  n0,
  _CRTP,
  {
    [_h]: ["PUT", "/restore-testing/plans", 201],
  },
  () => CreateRestoreTestingPlanInput,
  () => CreateRestoreTestingPlanOutput
);
export var CreateRestoreTestingSelection = op(
  n0,
  _CRTS,
  {
    [_h]: ["PUT", "/restore-testing/plans/{RestoreTestingPlanName}/selections", 201],
  },
  () => CreateRestoreTestingSelectionInput,
  () => CreateRestoreTestingSelectionOutput
);
export var DeleteRestoreTestingPlan = op(
  n0,
  _DRTP,
  {
    [_h]: ["DELETE", "/restore-testing/plans/{RestoreTestingPlanName}", 204],
  },
  () => DeleteRestoreTestingPlanInput,
  () => Unit
);
export var DeleteRestoreTestingSelection = op(
  n0,
  _DRTS,
  {
    [_h]: ["DELETE", "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", 204],
  },
  () => DeleteRestoreTestingSelectionInput,
  () => Unit
);
export var GetRestoreTestingInferredMetadata = op(
  n0,
  _GRTIM,
  {
    [_h]: ["GET", "/restore-testing/inferred-metadata", 200],
  },
  () => GetRestoreTestingInferredMetadataInput,
  () => GetRestoreTestingInferredMetadataOutput
);
export var GetRestoreTestingPlan = op(
  n0,
  _GRTP,
  {
    [_h]: ["GET", "/restore-testing/plans/{RestoreTestingPlanName}", 200],
  },
  () => GetRestoreTestingPlanInput,
  () => GetRestoreTestingPlanOutput
);
export var GetRestoreTestingSelection = op(
  n0,
  _GRTS,
  {
    [_h]: ["GET", "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", 200],
  },
  () => GetRestoreTestingSelectionInput,
  () => GetRestoreTestingSelectionOutput
);
export var ListRestoreTestingPlans = op(
  n0,
  _LRTP,
  {
    [_h]: ["GET", "/restore-testing/plans", 200],
  },
  () => ListRestoreTestingPlansInput,
  () => ListRestoreTestingPlansOutput
);
export var ListRestoreTestingSelections = op(
  n0,
  _LRTS,
  {
    [_h]: ["GET", "/restore-testing/plans/{RestoreTestingPlanName}/selections", 200],
  },
  () => ListRestoreTestingSelectionsInput,
  () => ListRestoreTestingSelectionsOutput
);
export var UpdateRestoreTestingPlan = op(
  n0,
  _URTP,
  {
    [_h]: ["PUT", "/restore-testing/plans/{RestoreTestingPlanName}", 200],
  },
  () => UpdateRestoreTestingPlanInput,
  () => UpdateRestoreTestingPlanOutput
);
export var UpdateRestoreTestingSelection = op(
  n0,
  _URTS,
  {
    [_h]: ["PUT", "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", 200],
  },
  () => UpdateRestoreTestingSelectionInput,
  () => UpdateRestoreTestingSelectionOutput
);
