// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLS,
  _CLSI,
  _CLSO,
  _CPS,
  _CPSI,
  _CPSO,
  _CRT,
  _CTS,
  _CTSI,
  _CTSO,
  _CWS,
  _CWSI,
  _CWSO,
  _h,
  _hQ,
  _LAen,
  _LLS,
  _LLSI,
  _LLSO,
  _LPS,
  _LPSI,
  _LPSO,
  _LSS,
  _LSSe,
  _LTS,
  _LTSI,
  _LTSO,
  _LWS,
  _LWSI,
  _LWSO,
  _MR,
  _NT,
  _PAr,
  _PSS,
  _PSSr,
  _PT,
  _SI,
  _SM,
  _St,
  _SW,
  _SWP,
  _TA,
  _TSS,
  _TSSe,
  _WI,
  _WSS,
  _WSSo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLensShareInput = struct(n0, _CLSI, 0, [_LAen, _SW, _CRT], [[0, 1], 0, [0, 4]]);
export var CreateLensShareOutput = struct(n0, _CLSO, 0, [_SI], [0]);
export var CreateProfileShareInput = struct(n0, _CPSI, 0, [_PAr, _SW, _CRT], [[0, 1], 0, [0, 4]]);
export var CreateProfileShareOutput = struct(n0, _CPSO, 0, [_SI, _PAr], [0, 0]);
export var CreateTemplateShareInput = struct(n0, _CTSI, 0, [_TA, _SW, _CRT], [[0, 1], 0, [0, 4]]);
export var CreateTemplateShareOutput = struct(n0, _CTSO, 0, [_TA, _SI], [0, 0]);
export var CreateWorkloadShareInput = struct(n0, _CWSI, 0, [_WI, _SW, _PT, _CRT], [[0, 1], 0, 0, [0, 4]]);
export var CreateWorkloadShareOutput = struct(n0, _CWSO, 0, [_WI, _SI], [0, 0]);
export var LensShareSummary = struct(n0, _LSS, 0, [_SI, _SW, _St, _SM], [0, 0, 0, 0]);
export var ListLensSharesInput = struct(
  n0,
  _LLSI,
  0,
  [_LAen, _SWP, _NT, _MR, _St],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _SWP,
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
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
  ]
);
export var ListLensSharesOutput = struct(n0, _LLSO, 0, [_LSSe, _NT], [() => LensShareSummaries, 0]);
export var ListProfileSharesInput = struct(
  n0,
  _LPSI,
  0,
  [_PAr, _SWP, _NT, _MR, _St],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _SWP,
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
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
  ]
);
export var ListProfileSharesOutput = struct(n0, _LPSO, 0, [_PSS, _NT], [() => ProfileShareSummaries, 0]);
export var ListTemplateSharesInput = struct(
  n0,
  _LTSI,
  0,
  [_TA, _SWP, _NT, _MR, _St],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _SWP,
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
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
  ]
);
export var ListTemplateSharesOutput = struct(n0, _LTSO, 0, [_TA, _TSS, _NT], [0, () => TemplateShareSummaries, 0]);
export var ListWorkloadSharesInput = struct(
  n0,
  _LWSI,
  0,
  [_WI, _SWP, _NT, _MR, _St],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _SWP,
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
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
  ]
);
export var ListWorkloadSharesOutput = struct(n0, _LWSO, 0, [_WI, _WSS, _NT], [0, () => WorkloadShareSummaries, 0]);
export var ProfileShareSummary = struct(n0, _PSSr, 0, [_SI, _SW, _St, _SM], [0, 0, 0, 0]);
export var TemplateShareSummary = struct(n0, _TSSe, 0, [_SI, _SW, _St, _SM], [0, 0, 0, 0]);
export var WorkloadShareSummary = struct(n0, _WSSo, 0, [_SI, _SW, _PT, _St, _SM], [0, 0, 0, 0, 0]);
export var LensShareSummaries = list(n0, _LSSe, 0, () => LensShareSummary);
export var ProfileShareSummaries = list(n0, _PSS, 0, () => ProfileShareSummary);
export var TemplateShareSummaries = list(n0, _TSS, 0, () => TemplateShareSummary);
export var WorkloadShareSummaries = list(n0, _WSS, 0, () => WorkloadShareSummary);
export var CreateLensShare = op(
  n0,
  _CLS,
  {
    [_h]: ["POST", "/lenses/{LensAlias}/shares", 200],
  },
  () => CreateLensShareInput,
  () => CreateLensShareOutput
);
export var CreateProfileShare = op(
  n0,
  _CPS,
  {
    [_h]: ["POST", "/profiles/{ProfileArn}/shares", 200],
  },
  () => CreateProfileShareInput,
  () => CreateProfileShareOutput
);
export var CreateTemplateShare = op(
  n0,
  _CTS,
  {
    [_h]: ["POST", "/templates/shares/{TemplateArn}", 200],
  },
  () => CreateTemplateShareInput,
  () => CreateTemplateShareOutput
);
export var CreateWorkloadShare = op(
  n0,
  _CWS,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/shares", 200],
  },
  () => CreateWorkloadShareInput,
  () => CreateWorkloadShareOutput
);
export var ListLensShares = op(
  n0,
  _LLS,
  {
    [_h]: ["GET", "/lenses/{LensAlias}/shares", 200],
  },
  () => ListLensSharesInput,
  () => ListLensSharesOutput
);
export var ListProfileShares = op(
  n0,
  _LPS,
  {
    [_h]: ["GET", "/profiles/{ProfileArn}/shares", 200],
  },
  () => ListProfileSharesInput,
  () => ListProfileSharesOutput
);
export var ListTemplateShares = op(
  n0,
  _LTS,
  {
    [_h]: ["GET", "/templates/shares/{TemplateArn}", 200],
  },
  () => ListTemplateSharesInput,
  () => ListTemplateSharesOutput
);
export var ListWorkloadShares = op(
  n0,
  _LWS,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/shares", 200],
  },
  () => ListWorkloadSharesInput,
  () => ListWorkloadSharesOutput
);
