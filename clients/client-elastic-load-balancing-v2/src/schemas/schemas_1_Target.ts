// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateTargetGroupNameException as __DuplicateTargetGroupNameException,
  HealthUnavailableException as __HealthUnavailableException,
  InvalidTargetException as __InvalidTargetException,
} from "../models/index";
import {
  _AD,
  _AO,
  _aQE,
  _AZ,
  _c,
  _CTG,
  _CTGI,
  _CTGO,
  _D,
  _DT,
  _DTGNE,
  _DTH,
  _DTHI,
  _DTHO,
  _DTI,
  _DTO,
  _e,
  _GC,
  _HC,
  _HCE,
  _HCIS,
  _HCP,
  _HCPe,
  _HCPea,
  _HCTS,
  _hE,
  _HTC,
  _HUE,
  _IAT,
  _Id,
  _In,
  _ITE,
  _LBAoa,
  _M,
  _Ma,
  _MIE,
  _MTG,
  _MTGI,
  _MTGO,
  _N,
  _Po,
  _Pr,
  _PV,
  _R,
  _Re,
  _RTe,
  _RTI,
  _RTO,
  _S,
  _s,
  _Ta,
  _Tar,
  _Targ,
  _TDar,
  _TDarg,
  _TG,
  _TGA,
  _TGa,
  _TGN,
  _TH,
  _THD,
  _THDa,
  _TT,
  _UTC,
  _VI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Create";

/* eslint no-var: 0 */

export var AdministrativeOverride = struct(n0, _AO, 0, [_S, _R, _D], [0, 0, 0]);
export var AnomalyDetection = struct(n0, _AD, 0, [_Re, _MIE], [0, 0]);
export var CreateTargetGroupInput = struct(
  n0,
  _CTGI,
  0,
  [_N, _Pr, _PV, _Po, _VI, _HCP, _HCPe, _HCE, _HCPea, _HCIS, _HCTS, _HTC, _UTC, _Ma, _TT, _Ta, _IAT],
  [0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 1, 1, 1, () => Matcher, 0, () => TagList, 0]
);
export var CreateTargetGroupOutput = struct(n0, _CTGO, 0, [_TG], [() => TargetGroups]);
export var DeregisterTargetsInput = struct(n0, _DTI, 0, [_TGA, _Tar], [0, () => TargetDescriptions]);
export var DeregisterTargetsOutput = struct(n0, _DTO, 0, [], []);
export var DescribeTargetHealthInput = struct(n0, _DTHI, 0, [_TGA, _Tar, _In], [0, () => TargetDescriptions, 64 | 0]);
export var DescribeTargetHealthOutput = struct(n0, _DTHO, 0, [_THD], [() => TargetHealthDescriptions]);
export var DuplicateTargetGroupNameException = error(
  n0,
  _DTGNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateTargetGroupName`, 400],
  },
  [_M],
  [0],

  __DuplicateTargetGroupNameException
);
export var HealthUnavailableException = error(
  n0,
  _HUE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`HealthUnavailable`, 500],
  },
  [_M],
  [0],

  __HealthUnavailableException
);
export var InvalidTargetException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidTarget`, 400],
  },
  [_M],
  [0],

  __InvalidTargetException
);
export var Matcher = struct(n0, _Ma, 0, [_HC, _GC], [0, 0]);
export var ModifyTargetGroupInput = struct(
  n0,
  _MTGI,
  0,
  [_TGA, _HCP, _HCPe, _HCPea, _HCE, _HCIS, _HCTS, _HTC, _UTC, _Ma],
  [0, 0, 0, 0, 2, 1, 1, 1, 1, () => Matcher]
);
export var ModifyTargetGroupOutput = struct(n0, _MTGO, 0, [_TG], [() => TargetGroups]);
export var RegisterTargetsInput = struct(n0, _RTI, 0, [_TGA, _Tar], [0, () => TargetDescriptions]);
export var RegisterTargetsOutput = struct(n0, _RTO, 0, [], []);
export var TargetDescription = struct(n0, _TDar, 0, [_Id, _Po, _AZ], [0, 1, 0]);
export var TargetGroup = struct(
  n0,
  _TGa,
  0,
  [_TGA, _TGN, _Pr, _Po, _VI, _HCP, _HCPe, _HCE, _HCIS, _HCTS, _HTC, _UTC, _HCPea, _Ma, _LBAoa, _TT, _PV, _IAT],
  [0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 1, 1, 0, () => Matcher, 64 | 0, 0, 0, 0]
);
export var TargetHealth = struct(n0, _TH, 0, [_S, _R, _D], [0, 0, 0]);
export var TargetHealthDescription = struct(
  n0,
  _THDa,
  0,
  [_Targ, _HCPe, _TH, _AD, _AO],
  [() => TargetDescription, 0, () => TargetHealth, () => AnomalyDetection, () => AdministrativeOverride]
);
export var ListOfDescribeTargetHealthIncludeOptions = 64 | 0;

export var TargetDescriptions = list(n0, _TDarg, 0, () => TargetDescription);
export var TargetGroups = list(n0, _TG, 0, () => TargetGroup);
export var TargetHealthDescriptions = list(n0, _THD, 0, () => TargetHealthDescription);
export var CreateTargetGroup = op(
  n0,
  _CTG,
  0,
  () => CreateTargetGroupInput,
  () => CreateTargetGroupOutput
);
export var DeregisterTargets = op(
  n0,
  _DT,
  0,
  () => DeregisterTargetsInput,
  () => DeregisterTargetsOutput
);
export var DescribeTargetHealth = op(
  n0,
  _DTH,
  0,
  () => DescribeTargetHealthInput,
  () => DescribeTargetHealthOutput
);
export var ModifyTargetGroup = op(
  n0,
  _MTG,
  0,
  () => ModifyTargetGroupInput,
  () => ModifyTargetGroupOutput
);
export var RegisterTargets = op(
  n0,
  _RTe,
  0,
  () => RegisterTargetsInput,
  () => RegisterTargetsOutput
);
