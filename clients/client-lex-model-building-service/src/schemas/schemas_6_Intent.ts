// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aS,
  _CBV,
  _CBVR,
  _CBVRr,
  _cD,
  _cDh,
  _CH,
  _cH,
  _ch,
  _CIV,
  _CIVR,
  _CIVRr,
  _co,
  _cP,
  _cPo,
  _cS,
  _cT,
  _cV,
  _d,
  _dCH,
  _DI,
  _DIR,
  _DIV,
  _DIVR,
  _dS,
  _dV,
  _dVL,
  _dVS,
  _eMI,
  _FA,
  _fA,
  _fR,
  _FUP,
  _fUP,
  _GB,
  _GBR,
  _GBRe,
  _GIe,
  _GIRet,
  _GIRetn,
  _gN,
  _h,
  _I,
  _i,
  _IC,
  _iC,
  _ICL,
  _IL,
  _iN,
  _iSTTLIS,
  _iV,
  _KC,
  _kC,
  _kI,
  _l,
  _lUD,
  _M,
  _mA,
  _me,
  _ML,
  _mV,
  _n,
  _nICT,
  _OC,
  _oC,
  _OCL,
  _oS,
  _P,
  _p,
  _PB,
  _pB,
  _PBR,
  _PBRu,
  _PI,
  _PIR,
  _PIRu,
  _pIS,
  _pr,
  _qFS,
  _r,
  _rC,
  _rS,
  _S,
  _s,
  _sCl,
  _SDV,
  _SDVL,
  _SDVS,
  _SL,
  _sl,
  _St,
  _sTl,
  _sTV,
  _sU,
  _t,
  _ta,
  _tTL,
  _tTLIS,
  _u,
  _v,
  _vEP,
  _vI,
  _vOA,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var CodeHook = struct(n0, _CH, 0, [_u, _mV], [0, 0]);
export var CreateBotVersionRequest = struct(n0, _CBVR, 0, [_n, _ch], [[0, 1], 0]);
export var CreateBotVersionResponse = struct(
  n0,
  _CBVRr,
  0,
  [_n, _d, _i, _cP, _aS, _s, _fR, _lUD, _cD, _iSTTLIS, _vI, _ch, _v, _l, _cDh, _eMI, _dS],
  [0, 0, () => IntentList, () => Prompt, () => Statement, 0, 0, 4, 4, 1, 0, 0, 0, 0, 2, 2, 2]
);
export var CreateIntentVersionRequest = struct(n0, _CIVR, 0, [_n, _ch], [[0, 1], 0]);
export var CreateIntentVersionResponse = struct(
  n0,
  _CIVRr,
  0,
  [_n, _d, _sl, _sU, _cPo, _rS, _fUP, _cS, _dCH, _fA, _pIS, _lUD, _cD, _v, _ch, _kC, _iC, _oC],
  [
    0,
    0,
    () => SlotList,
    64 | 0,
    () => Prompt,
    () => Statement,
    () => FollowUpPrompt,
    () => Statement,
    () => CodeHook,
    () => FulfillmentActivity,
    0,
    4,
    4,
    0,
    0,
    () => KendraConfiguration,
    () => InputContextList,
    () => OutputContextList,
  ]
);
export var DeleteIntentRequest = struct(n0, _DIR, 0, [_n], [[0, 1]]);
export var DeleteIntentVersionRequest = struct(
  n0,
  _DIVR,
  0,
  [_n, _v],
  [
    [0, 1],
    [0, 1],
  ]
);
export var FollowUpPrompt = struct(n0, _FUP, 0, [_p, _rS], [() => Prompt, () => Statement]);
export var FulfillmentActivity = struct(n0, _FA, 0, [_t, _cH], [0, () => CodeHook]);
export var GetBotRequest = struct(
  n0,
  _GBR,
  0,
  [_n, _vOA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBotResponse = struct(
  n0,
  _GBRe,
  0,
  [_n, _d, _i, _eMI, _nICT, _cP, _aS, _s, _fR, _lUD, _cD, _iSTTLIS, _vI, _ch, _v, _l, _cDh, _dS],
  [0, 0, () => IntentList, 2, 1, () => Prompt, () => Statement, 0, 0, 4, 4, 1, 0, 0, 0, 0, 2, 2]
);
export var GetIntentRequest = struct(
  n0,
  _GIRet,
  0,
  [_n, _v],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIntentResponse = struct(
  n0,
  _GIRetn,
  0,
  [_n, _d, _sl, _sU, _cPo, _rS, _fUP, _cS, _dCH, _fA, _pIS, _lUD, _cD, _v, _ch, _kC, _iC, _oC],
  [
    0,
    0,
    () => SlotList,
    64 | 0,
    () => Prompt,
    () => Statement,
    () => FollowUpPrompt,
    () => Statement,
    () => CodeHook,
    () => FulfillmentActivity,
    0,
    4,
    4,
    0,
    0,
    () => KendraConfiguration,
    () => InputContextList,
    () => OutputContextList,
  ]
);
export var InputContext = struct(n0, _IC, 0, [_n], [0]);
export var Intent = struct(n0, _I, 0, [_iN, _iV], [0, 0]);
export var KendraConfiguration = struct(n0, _KC, 0, [_kI, _qFS, _r], [0, 0, 0]);
export var Message = struct(n0, _M, 0, [_cT, _co, _gN], [0, 0, 1]);
export var OutputContext = struct(n0, _OC, 0, [_n, _tTLIS, _tTL], [0, 1, 1]);
export var Prompt = struct(n0, _P, 0, [_me, _mA, _rC], [() => MessageList, 1, 0]);
export var PutBotRequest = struct(
  n0,
  _PBR,
  0,
  [_n, _d, _i, _eMI, _nICT, _cP, _aS, _iSTTLIS, _vI, _ch, _pB, _l, _cDh, _dS, _cV, _ta],
  [[0, 1], 0, () => IntentList, 2, 1, () => Prompt, () => Statement, 1, 0, 0, 0, 0, 2, 2, 2, () => TagList]
);
export var PutBotResponse = struct(
  n0,
  _PBRu,
  0,
  [_n, _d, _i, _eMI, _nICT, _cP, _aS, _s, _fR, _lUD, _cD, _iSTTLIS, _vI, _ch, _v, _l, _cDh, _cV, _dS, _ta],
  [0, 0, () => IntentList, 2, 1, () => Prompt, () => Statement, 0, 0, 4, 4, 1, 0, 0, 0, 0, 2, 2, 2, () => TagList]
);
export var PutIntentRequest = struct(
  n0,
  _PIR,
  0,
  [_n, _d, _sl, _sU, _cPo, _rS, _fUP, _cS, _dCH, _fA, _pIS, _ch, _cV, _kC, _iC, _oC],
  [
    [0, 1],
    0,
    () => SlotList,
    64 | 0,
    () => Prompt,
    () => Statement,
    () => FollowUpPrompt,
    () => Statement,
    () => CodeHook,
    () => FulfillmentActivity,
    0,
    0,
    2,
    () => KendraConfiguration,
    () => InputContextList,
    () => OutputContextList,
  ]
);
export var PutIntentResponse = struct(
  n0,
  _PIRu,
  0,
  [_n, _d, _sl, _sU, _cPo, _rS, _fUP, _cS, _dCH, _fA, _pIS, _lUD, _cD, _v, _ch, _cV, _kC, _iC, _oC],
  [
    0,
    0,
    () => SlotList,
    64 | 0,
    () => Prompt,
    () => Statement,
    () => FollowUpPrompt,
    () => Statement,
    () => CodeHook,
    () => FulfillmentActivity,
    0,
    4,
    4,
    0,
    0,
    2,
    () => KendraConfiguration,
    () => InputContextList,
    () => OutputContextList,
  ]
);
export var Slot = struct(
  n0,
  _S,
  0,
  [_n, _d, _sCl, _sTl, _sTV, _vEP, _pr, _sU, _rC, _oS, _dVS],
  [0, 0, 0, 0, 0, () => Prompt, 1, 64 | 0, 0, 0, () => SlotDefaultValueSpec]
);
export var SlotDefaultValue = struct(n0, _SDV, 0, [_dV], [0]);
export var SlotDefaultValueSpec = struct(n0, _SDVS, 0, [_dVL], [() => SlotDefaultValueList]);
export var Statement = struct(n0, _St, 0, [_me, _rC], [() => MessageList, 0]);
export var InputContextList = list(n0, _ICL, 0, () => InputContext);
export var IntentList = list(n0, _IL, 0, () => Intent);
export var IntentUtteranceList = 64 | 0;

export var MessageList = list(n0, _ML, 0, () => Message);
export var OutputContextList = list(n0, _OCL, 0, () => OutputContext);
export var SlotDefaultValueList = list(n0, _SDVL, 0, () => SlotDefaultValue);
export var SlotList = list(n0, _SL, 0, () => Slot);
export var SlotUtteranceList = 64 | 0;

export var CreateBotVersion = op(
  n0,
  _CBV,
  {
    [_h]: ["POST", "/bots/{name}/versions", 201],
  },
  () => CreateBotVersionRequest,
  () => CreateBotVersionResponse
);
export var CreateIntentVersion = op(
  n0,
  _CIV,
  {
    [_h]: ["POST", "/intents/{name}/versions", 201],
  },
  () => CreateIntentVersionRequest,
  () => CreateIntentVersionResponse
);
export var DeleteIntent = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/intents/{name}", 204],
  },
  () => DeleteIntentRequest,
  () => Unit
);
export var DeleteIntentVersion = op(
  n0,
  _DIV,
  {
    [_h]: ["DELETE", "/intents/{name}/versions/{version}", 204],
  },
  () => DeleteIntentVersionRequest,
  () => Unit
);
export var GetBot = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/bots/{name}/versions/{versionOrAlias}", 200],
  },
  () => GetBotRequest,
  () => GetBotResponse
);
export var GetIntent = op(
  n0,
  _GIe,
  {
    [_h]: ["GET", "/intents/{name}/versions/{version}", 200],
  },
  () => GetIntentRequest,
  () => GetIntentResponse
);
export var PutBot = op(
  n0,
  _PB,
  {
    [_h]: ["PUT", "/bots/{name}/versions/$LATEST", 200],
  },
  () => PutBotRequest,
  () => PutBotResponse
);
export var PutIntent = op(
  n0,
  _PI,
  {
    [_h]: ["PUT", "/intents/{name}/versions/$LATEST", 200],
  },
  () => PutIntentRequest,
  () => PutIntentResponse
);
