// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BAI,
  _BCA,
  _BCAy,
  _BCB,
  _BCBy,
  _BRPCDA,
  _BRPCDB,
  _BRT,
  _BRTPA,
  _BSIB,
  _BSyt,
  _cA,
  _cAo,
  _CB,
  _cB,
  _cBo,
  _CD,
  _CDo,
  _CRA,
  _DSe,
  _DSM,
  _ECTM,
  _h,
  _hQ,
  _IRA,
  _LRJBPR,
  _LRJBPRI,
  _LRJBPRO,
  _LRJi,
  _LRJIi,
  _LRJOi,
  _MR,
  _mR,
  _NT,
  _nT,
  _PD,
  _RA,
  _RJC,
  _RJes,
  _RJIe,
  _RJLe,
  _RJLM,
  _RPA,
  _RPCD,
  _rPCDA,
  _rPCDB,
  _RT,
  _rT,
  _RTPA,
  _rTPA,
  _SM,
  _St,
  _sta,
  _VSa,
  _VSM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRestoreJobsByProtectedResourceInput = struct(
  n0,
  _LRJBPRI,
  0,
  [_RA, _BSyt, _BRPCDA, _BRPCDB, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
    [
      4,
      {
        [_hQ]: _rPCDA,
      },
    ],
    [
      4,
      {
        [_hQ]: _rPCDB,
      },
    ],
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
export var ListRestoreJobsByProtectedResourceOutput = struct(n0, _LRJBPRO, 0, [_RJes, _NT], [() => RestoreJobsList, 0]);
export var ListRestoreJobsInput = struct(
  n0,
  _LRJIi,
  0,
  [_NT, _MR, _BAI, _BRT, _BCB, _BCA, _BSyt, _BCBy, _BCAy, _BRTPA],
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
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      4,
      {
        [_hQ]: _cB,
      },
    ],
    [
      4,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
    [
      4,
      {
        [_hQ]: _cBo,
      },
    ],
    [
      4,
      {
        [_hQ]: _cAo,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTPA,
      },
    ],
  ]
);
export var ListRestoreJobsOutput = struct(n0, _LRJOi, 0, [_RJes, _NT], [() => RestoreJobsList, 0]);
export var RestoreJobCreator = struct(n0, _RJC, 0, [_RTPA], [0]);
export var RestoreJobsListMember = struct(
  n0,
  _RJLM,
  0,
  [_AI, _RJIe, _RPA, _CD, _CDo, _St, _SM, _PD, _BSIB, _IRA, _ECTM, _CRA, _RT, _RPCD, _CB, _VSa, _VSM, _DSe, _DSM],
  [0, 0, 0, 4, 4, 0, 0, 0, 1, 0, 1, 0, 0, 4, () => RestoreJobCreator, 0, 0, 0, 0]
);
export var RestoreJobsList = list(n0, _RJLe, 0, () => RestoreJobsListMember);
export var ListRestoreJobs = op(
  n0,
  _LRJi,
  {
    [_h]: ["GET", "/restore-jobs", 200],
  },
  () => ListRestoreJobsInput,
  () => ListRestoreJobsOutput
);
export var ListRestoreJobsByProtectedResource = op(
  n0,
  _LRJBPR,
  {
    [_h]: ["GET", "/resources/{ResourceArn}/restore-jobs", 200],
  },
  () => ListRestoreJobsByProtectedResourceInput,
  () => ListRestoreJobsByProtectedResourceOutput
);
