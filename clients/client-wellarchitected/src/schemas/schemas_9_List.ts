// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ASc,
  _CAr,
  _CD,
  _CDh,
  _CI,
  _CS,
  _CSh,
  _D,
  _FR,
  _h,
  _hQ,
  _I,
  _L,
  _LAe,
  _LCD,
  _LCDI,
  _LCDO,
  _LCS,
  _LCSI,
  _LCSO,
  _LP,
  _LPI,
  _LPO,
  _LRT,
  _LRTI,
  _LRTO,
  _MR,
  _Na,
  _NT,
  _O,
  _P,
  _PAr,
  _PD,
  _PI,
  _PN,
  _PNP,
  _POT,
  _PS,
  _PSr,
  _PV,
  _QI,
  _Re,
  _RTev,
  _RTS,
  _St,
  _TA,
  _TN,
  _UA,
  _US,
  _WI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CheckDetail = struct(
  n0,
  _CD,
  0,
  [_I, _Na, _D, _P, _LAe, _PI, _QI, _CI, _St, _AI, _FR, _Re, _UA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4]
);
export var CheckSummary = struct(
  n0,
  _CS,
  0,
  [_I, _Na, _P, _D, _UA, _LAe, _PI, _QI, _CI, _St, _ASc],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 128 | 1]
);
export var ListCheckDetailsInput = struct(
  n0,
  _LCDI,
  0,
  [_WI, _NT, _MR, _LAe, _PI, _QI, _CI],
  [[0, 1], 0, 1, 0, 0, 0, 0]
);
export var ListCheckDetailsOutput = struct(n0, _LCDO, 0, [_CDh, _NT], [() => CheckDetails, 0]);
export var ListCheckSummariesInput = struct(
  n0,
  _LCSI,
  0,
  [_WI, _NT, _MR, _LAe, _PI, _QI, _CI],
  [[0, 1], 0, 1, 0, 0, 0, 0]
);
export var ListCheckSummariesOutput = struct(n0, _LCSO, 0, [_CSh, _NT], [() => CheckSummaries, 0]);
export var ListProfilesInput = struct(
  n0,
  _LPI,
  0,
  [_PNP, _POT, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _PNP,
      },
    ],
    [
      0,
      {
        [_hQ]: _POT,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListProfilesOutput = struct(n0, _LPO, 0, [_PS, _NT], [() => ProfileSummaries, 0]);
export var ListReviewTemplatesInput = struct(
  n0,
  _LRTI,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListReviewTemplatesOutput = struct(n0, _LRTO, 0, [_RTev, _NT], [() => ReviewTemplates, 0]);
export var ProfileSummary = struct(n0, _PSr, 0, [_PAr, _PV, _PN, _PD, _O, _CAr, _UA], [0, 0, 0, 0, 0, 4, 4]);
export var ReviewTemplateSummary = struct(n0, _RTS, 0, [_D, _L, _O, _UA, _TA, _TN, _US], [0, 64 | 0, 0, 4, 0, 0, 0]);
export var CheckDetails = list(n0, _CDh, 0, () => CheckDetail);
export var CheckSummaries = list(n0, _CSh, 0, () => CheckSummary);
export var ProfileSummaries = list(n0, _PS, 0, () => ProfileSummary);
export var ReviewTemplates = list(n0, _RTev, 0, () => ReviewTemplateSummary);
export var AccountSummary = 128 | 1;

export var ListCheckDetails = op(
  n0,
  _LCD,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/checks", 200],
  },
  () => ListCheckDetailsInput,
  () => ListCheckDetailsOutput
);
export var ListCheckSummaries = op(
  n0,
  _LCS,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/checkSummaries", 200],
  },
  () => ListCheckSummariesInput,
  () => ListCheckSummariesOutput
);
export var ListProfiles = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/profileSummaries", 200],
  },
  () => ListProfilesInput,
  () => ListProfilesOutput
);
export var ListReviewTemplates = op(
  n0,
  _LRT,
  {
    [_h]: ["GET", "/reviewTemplates", 200],
  },
  () => ListReviewTemplatesInput,
  () => ListReviewTemplatesOutput
);
