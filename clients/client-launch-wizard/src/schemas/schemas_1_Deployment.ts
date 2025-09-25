// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  ResourceLimitException as __ResourceLimitException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _aV,
  _c,
  _cA,
  _CD,
  _CDI,
  _CDO,
  _cl,
  _co,
  _d,
  _dA,
  _dAe,
  _DCF,
  _DD,
  _DDe,
  _DDI,
  _DDO,
  _dE,
  _de,
  _DEDS,
  _DEDSL,
  _dI,
  _dN,
  _dPN,
  _dR,
  _DS,
  _DSD,
  _DSF,
  _dU,
  _e,
  _GD,
  _GDI,
  _GDO,
  _GW,
  _GWDP,
  _GWDPI,
  _GWDPO,
  _GWI,
  _GWO,
  _h,
  _hE,
  _hQ,
  _i,
  _iU,
  _LDE,
  _LDEI,
  _LDEO,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _LWDP,
  _LWDPI,
  _LWDPO,
  _m,
  _mR,
  _n,
  _nT,
  _pN,
  _r,
  _rA,
  _rG,
  _RLE,
  _RNFE,
  _s,
  _SCD,
  _sM,
  _sR,
  _st,
  _t,
  _ti,
  _tK,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _v,
  _w,
  _WD,
  _wDP,
  _WDPD,
  _WDPDS,
  _WDPDSL,
  _wDPo,
  _wN,
  _wVN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDeploymentInput = struct(
  n0,
  _CDI,
  0,
  [_wN, _dPN, _n, _s, _dR, _t],
  [0, 0, 0, [() => DeploymentSpecifications, 0], 2, 128 | 0]
);
export var CreateDeploymentOutput = struct(n0, _CDO, 0, [_dI], [0]);
export var DeleteDeploymentInput = struct(n0, _DDI, 0, [_dI], [0]);
export var DeleteDeploymentOutput = struct(n0, _DDO, 0, [_st, _sR], [0, 0]);
export var DeploymentConditionalField = struct(n0, _DCF, 0, [_n, _v, _c], [0, 0, 0]);
export var DeploymentData = struct(
  n0,
  _DD,
  0,
  [_n, _i, _wN, _pN, _st, _cA, _s, _rG, _dA, _t, _dAe],
  [0, 0, 0, 0, 0, 4, [() => DeploymentSpecifications, 0], 0, 4, 128 | 0, 0]
);
export var DeploymentEventDataSummary = struct(n0, _DEDS, 0, [_n, _d, _st, _sR, _ti], [0, 0, 0, 0, 4]);
export var DeploymentSpecificationsField = struct(
  n0,
  _DSF,
  0,
  [_n, _d, _aV, _r, _co],
  [0, 0, 64 | 0, 0, () => SpecificationsConditionalData]
);
export var GetDeploymentInput = struct(n0, _GDI, 0, [_dI], [0]);
export var GetDeploymentOutput = struct(n0, _GDO, 0, [_de], [[() => DeploymentData, 0]]);
export var GetWorkloadDeploymentPatternInput = struct(n0, _GWDPI, 0, [_wN, _dPN], [0, 0]);
export var GetWorkloadDeploymentPatternOutput = struct(n0, _GWDPO, 0, [_wDP], [() => WorkloadDeploymentPatternData]);
export var GetWorkloadInput = struct(n0, _GWI, 0, [_wN], [0]);
export var GetWorkloadOutput = struct(n0, _GWO, 0, [_w], [() => WorkloadData]);
export var ListDeploymentEventsInput = struct(n0, _LDEI, 0, [_dI, _mR, _nT], [0, 1, 0]);
export var ListDeploymentEventsOutput = struct(n0, _LDEO, 0, [_dE, _nT], [() => DeploymentEventDataSummaryList, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var ListWorkloadDeploymentPatternsInput = struct(n0, _LWDPI, 0, [_wN, _mR, _nT], [0, 1, 0]);
export var ListWorkloadDeploymentPatternsOutput = struct(
  n0,
  _LWDPO,
  0,
  [_wDPo, _nT],
  [() => WorkloadDeploymentPatternDataSummaryList, 0]
);
export var ResourceLimitException = error(
  n0,
  _RLE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceLimitException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var WorkloadData = struct(n0, _WD, 0, [_wN, _dN, _d, _dU, _iU, _st, _sM], [0, 0, 0, 0, 0, 0, 0]);
export var WorkloadDeploymentPatternData = struct(
  n0,
  _WDPD,
  0,
  [_wN, _dPN, _wVN, _dN, _d, _st, _sM, _s],
  [0, 0, 0, 0, 0, 0, 0, () => DeploymentSpecificationsData]
);
export var WorkloadDeploymentPatternDataSummary = struct(
  n0,
  _WDPDS,
  0,
  [_wN, _dPN, _wVN, _dN, _d, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0]
);
export var AllowedValues = 64 | 0;

export var DeploymentEventDataSummaryList = list(n0, _DEDSL, 0, () => DeploymentEventDataSummary);
export var DeploymentSpecificationsData = list(n0, _DSD, 0, () => DeploymentSpecificationsField);
export var SpecificationsConditionalData = list(n0, _SCD, 0, () => DeploymentConditionalField);
export var TagKeyList = 64 | 0;

export var WorkloadDeploymentPatternDataSummaryList = list(n0, _WDPDSL, 0, () => WorkloadDeploymentPatternDataSummary);
export var DeploymentSpecifications = map(n0, _DS, 8, 0, 0);
export var Tags = 128 | 0;

export var CreateDeployment = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/createDeployment", 200],
  },
  () => CreateDeploymentInput,
  () => CreateDeploymentOutput
);
export var DeleteDeployment = op(
  n0,
  _DDe,
  {
    [_h]: ["POST", "/deleteDeployment", 200],
  },
  () => DeleteDeploymentInput,
  () => DeleteDeploymentOutput
);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/getDeployment", 200],
  },
  () => GetDeploymentInput,
  () => GetDeploymentOutput
);
export var GetWorkload = op(
  n0,
  _GW,
  {
    [_h]: ["POST", "/getWorkload", 200],
  },
  () => GetWorkloadInput,
  () => GetWorkloadOutput
);
export var GetWorkloadDeploymentPattern = op(
  n0,
  _GWDP,
  {
    [_h]: ["POST", "/getWorkloadDeploymentPattern", 200],
  },
  () => GetWorkloadDeploymentPatternInput,
  () => GetWorkloadDeploymentPatternOutput
);
export var ListDeploymentEvents = op(
  n0,
  _LDE,
  {
    [_h]: ["POST", "/listDeploymentEvents", 200],
  },
  () => ListDeploymentEventsInput,
  () => ListDeploymentEventsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var ListWorkloadDeploymentPatterns = op(
  n0,
  _LWDP,
  {
    [_h]: ["POST", "/listWorkloadDeploymentPatterns", 200],
  },
  () => ListWorkloadDeploymentPatternsInput,
  () => ListWorkloadDeploymentPatternsOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
