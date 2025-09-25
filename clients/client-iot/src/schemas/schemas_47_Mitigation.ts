// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAc,
  _aI,
  _aN,
  _aPc,
  _aT,
  _ATTTGP,
  _aTTTGP,
  _cD,
  _CMAR,
  _CMAr,
  _CMARr,
  _DMAe,
  _DMARes,
  _DMAResc,
  _EITLP,
  _eITLP,
  _h,
  _lL,
  _lMD,
  _MAP,
  _oDG,
  _PFTSP,
  _pFTSP,
  _rA,
  _rAFL,
  _RDPVP,
  _rDPVP,
  _tag,
  _tAo,
  _tGN,
  _tNe,
  _UCACP,
  _uCACP,
  _UDCP,
  _uDCP,
  _UMA,
  _UMAR,
  _UMARp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddThingsToThingGroupParams = struct(n0, _ATTTGP, 0, [_tGN, _oDG], [64 | 0, 2]);
export var CreateMitigationActionRequest = struct(
  n0,
  _CMAR,
  0,
  [_aN, _rA, _aPc, _tag],
  [[0, 1], 0, () => MitigationActionParams, () => TagList]
);
export var CreateMitigationActionResponse = struct(n0, _CMARr, 0, [_aAc, _aI], [0, 0]);
export var DescribeMitigationActionRequest = struct(n0, _DMARes, 0, [_aN], [[0, 1]]);
export var DescribeMitigationActionResponse = struct(
  n0,
  _DMAResc,
  0,
  [_aN, _aT, _aAc, _aI, _rA, _aPc, _cD, _lMD],
  [0, 0, 0, 0, 0, () => MitigationActionParams, 4, 4]
);
export var EnableIoTLoggingParams = struct(n0, _EITLP, 0, [_rAFL, _lL], [0, 0]);
export var MitigationActionParams = struct(
  n0,
  _MAP,
  0,
  [_uDCP, _uCACP, _aTTTGP, _rDPVP, _eITLP, _pFTSP],
  [
    () => UpdateDeviceCertificateParams,
    () => UpdateCACertificateParams,
    () => AddThingsToThingGroupParams,
    () => ReplaceDefaultPolicyVersionParams,
    () => EnableIoTLoggingParams,
    () => PublishFindingToSnsParams,
  ]
);
export var PublishFindingToSnsParams = struct(n0, _PFTSP, 0, [_tAo], [0]);
export var ReplaceDefaultPolicyVersionParams = struct(n0, _RDPVP, 0, [_tNe], [0]);
export var UpdateCACertificateParams = struct(n0, _UCACP, 0, [_a], [0]);
export var UpdateDeviceCertificateParams = struct(n0, _UDCP, 0, [_a], [0]);
export var UpdateMitigationActionRequest = struct(
  n0,
  _UMAR,
  0,
  [_aN, _rA, _aPc],
  [[0, 1], 0, () => MitigationActionParams]
);
export var UpdateMitigationActionResponse = struct(n0, _UMARp, 0, [_aAc, _aI], [0, 0]);
export var ThingGroupNames = 64 | 0;

export var CreateMitigationAction = op(
  n0,
  _CMAr,
  {
    [_h]: ["POST", "/mitigationactions/actions/{actionName}", 200],
  },
  () => CreateMitigationActionRequest,
  () => CreateMitigationActionResponse
);
export var DescribeMitigationAction = op(
  n0,
  _DMAe,
  {
    [_h]: ["GET", "/mitigationactions/actions/{actionName}", 200],
  },
  () => DescribeMitigationActionRequest,
  () => DescribeMitigationActionResponse
);
export var UpdateMitigationAction = op(
  n0,
  _UMA,
  {
    [_h]: ["PATCH", "/mitigationactions/actions/{actionName}", 200],
  },
  () => UpdateMitigationActionRequest,
  () => UpdateMitigationActionResponse
);
