// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ac,
  _AE,
  _aE,
  _AES,
  _AL,
  _cB,
  _CC,
  _cC,
  _cS,
  _cTr,
  _dN,
  _dNo,
  _dPy,
  _dS,
  _DSP,
  _DSPV,
  _dV,
  _ECC,
  _em,
  _en,
  _GIR,
  _GIRI,
  _GIRO,
  _GRPe,
  _GRPIe,
  _GRPOe,
  _h,
  _hQ,
  _I,
  _i,
  _iB,
  _im,
  _In,
  _IR,
  _iR,
  _IRS,
  _iRS,
  _IT,
  _iT,
  _iTn,
  _lMB,
  _lMT,
  _n,
  _NTI,
  _nTo,
  _NTS,
  _pa,
  _PDC,
  _pDC,
  _PDIC,
  _pDIC,
  _rAe,
  _rAo,
  _rTe,
  _s,
  _SA,
  _sAs,
  _sEA,
  _sI,
  _sIe,
  _so,
  _SP,
  _st,
  _sTA,
  _tA,
  _ti,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmptyChatChannel = struct(n0, _ECC, 0, [], []);
export var GetIncidentRecordInput = struct(
  n0,
  _GIRI,
  0,
  [_a],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var GetIncidentRecordOutput = struct(n0, _GIRO, 0, [_iR], [() => IncidentRecord]);
export var GetResponsePlanInput = struct(
  n0,
  _GRPIe,
  0,
  [_a],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var GetResponsePlanOutput = struct(
  n0,
  _GRPOe,
  0,
  [_a, _n, _dN, _iT, _cC, _en, _ac, _i],
  [0, 0, 0, () => IncidentTemplate, () => ChatChannel, 64 | 0, () => ActionsList, () => Integrations]
);
export var IncidentRecord = struct(
  n0,
  _IR,
  0,
  [_a, _ti, _s, _st, _im, _cTr, _rTe, _lMT, _lMB, _aE, _iRS, _dS, _cC, _nTo],
  [
    0,
    0,
    0,
    0,
    1,
    4,
    4,
    4,
    0,
    () => AutomationExecutionSet,
    () => IncidentRecordSource,
    0,
    () => ChatChannel,
    () => NotificationTargetSet,
  ]
);
export var IncidentRecordSource = struct(n0, _IRS, 0, [_cB, _iB, _rAe, _so], [0, 0, 0, 0]);
export var IncidentTemplate = struct(
  n0,
  _IT,
  0,
  [_ti, _im, _s, _dS, _nTo, _iTn],
  [0, 1, 0, 0, () => NotificationTargetSet, 128 | 0]
);
export var PagerDutyConfiguration = struct(n0, _PDC, 0, [_n, _sI, _pDIC], [0, 0, () => PagerDutyIncidentConfiguration]);
export var PagerDutyIncidentConfiguration = struct(n0, _PDIC, 0, [_sIe], [0]);
export var SsmAutomation = struct(
  n0,
  _SA,
  0,
  [_rAo, _dNo, _dV, _tA, _pa, _dPy],
  [0, 0, 0, 0, map(n0, _SP, 0, 0, 64 | 0), () => DynamicSsmParameters]
);
export var ActionsList = list(n0, _AL, 0, () => Action);
export var AutomationExecutionSet = list(n0, _AES, 0, () => AutomationExecution);
export var ChatbotSnsConfigurationSet = 64 | 0;

export var EngagementSet = 64 | 0;

export var Integrations = list(n0, _I, 0, () => Integration);
export var NotificationTargetSet = list(n0, _NTS, 0, () => NotificationTargetItem);
export var SsmParameterValues = 64 | 0;

export var DynamicSsmParameters = map(n0, _DSP, 0, 0, () => DynamicSsmParameterValue);
export var SsmParameters = map(n0, _SP, 0, 0, 64 | 0);
export var Action = uni(n0, _A, 0, [_sAs], [() => SsmAutomation]);
export var AutomationExecution = uni(n0, _AE, 0, [_sEA], [0]);
export var ChatChannel = uni(n0, _CC, 0, [_em, _cS], [() => EmptyChatChannel, 64 | 0]);
export var DynamicSsmParameterValue = uni(n0, _DSPV, 0, [_va], [0]);
export var Integration = uni(n0, _In, 0, [_pDC], [() => PagerDutyConfiguration]);
export var NotificationTargetItem = uni(n0, _NTI, 0, [_sTA], [0]);
export var GetIncidentRecord = op(
  n0,
  _GIR,
  {
    [_h]: ["GET", "/getIncidentRecord", 200],
  },
  () => GetIncidentRecordInput,
  () => GetIncidentRecordOutput
);
export var GetResponsePlan = op(
  n0,
  _GRPe,
  {
    [_h]: ["GET", "/getResponsePlan", 200],
  },
  () => GetResponsePlanInput,
  () => GetResponsePlanOutput
);
