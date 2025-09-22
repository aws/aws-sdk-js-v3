// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aA,
  _AAC,
  _aCM,
  _ACt,
  _aCt,
  _aIp,
  _aS,
  _ASC,
  _aSC,
  _cA,
  _cC,
  _cIFOIDC,
  _d,
  _dAC,
  _DACoc,
  _DACocum,
  _dN,
  _dST,
  _e,
  _EC,
  _eC,
  _GA,
  _GAR,
  _GARe,
  _GI,
  _GIR,
  _GIRe,
  _ht,
  _iA,
  _iCAA,
  _ICC,
  _iCIA,
  _iI,
  _iIPA,
  _IS,
  _iSn,
  _iT,
  _iTB,
  _iTDC,
  _KKI,
  _kKI,
  _n,
  _pC,
  _PCe,
  _pCM,
  _QAC,
  _qAC,
  _qACM,
  _qSC,
  _rA,
  _s,
  _se,
  _t,
  _TDS,
  _tDS,
  _uA,
  _UAp,
  _UAR,
  _UARp,
  _UI,
  _UIR,
  _UIRp,
  _un,
  ErrorDetail,
  n0,
} from "./schemas_0";
import { QuickSightConfiguration } from "./schemas_22_Application";

/* eslint no-var: 0 */

export var KmsKeyId = sim(n0, _KKI, 0, 8);
export var AppliedAttachmentsConfiguration = struct(n0, _AAC, 0, [_aCM], [0]);
export var AttachmentsConfiguration = struct(n0, _ACt, 0, [_aCM], [0]);
export var AutoSubscriptionConfiguration = struct(n0, _ASC, 0, [_aS, _dST], [0, 0]);
export var DocumentAttributeConfiguration = struct(n0, _DACoc, 0, [_n, _t, _se], [0, 0, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_kKI], [[() => KmsKeyId, 0]]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_aIp], [[0, 1]]);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_dN, _aIp, _aA, _iT, _iIPA, _iCAA, _rA, _s, _d, _eC, _cA, _uA, _e, _aCt, _qAC, _pC, _aSC, _cIFOIDC, _qSC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => EncryptionConfiguration, 0],
    4,
    4,
    () => ErrorDetail,
    () => AppliedAttachmentsConfiguration,
    () => QAppsConfiguration,
    () => PersonalizationConfiguration,
    () => AutoSubscriptionConfiguration,
    64 | 0,
    () => QuickSightConfiguration,
  ]
);
export var GetIndexRequest = struct(
  n0,
  _GIR,
  0,
  [_aIp, _iI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIndexResponse = struct(
  n0,
  _GIRe,
  0,
  [_aIp, _iI, _dN, _iA, _s, _t, _d, _cA, _uA, _cC, _dAC, _e, _iSn],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => IndexCapacityConfiguration,
    () => DocumentAttributeConfigurations,
    () => ErrorDetail,
    () => IndexStatistics,
  ]
);
export var IndexCapacityConfiguration = struct(n0, _ICC, 0, [_un], [1]);
export var IndexStatistics = struct(n0, _IS, 0, [_tDS], [() => TextDocumentStatistics]);
export var PersonalizationConfiguration = struct(n0, _PCe, 0, [_pCM], [0]);
export var QAppsConfiguration = struct(n0, _QAC, 0, [_qACM], [0]);
export var TextDocumentStatistics = struct(n0, _TDS, 0, [_iTB, _iTDC], [1, 1]);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_aIp, _iCIA, _dN, _d, _rA, _aCt, _qAC, _pC, _aSC],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    () => AttachmentsConfiguration,
    () => QAppsConfiguration,
    () => PersonalizationConfiguration,
    () => AutoSubscriptionConfiguration,
  ]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var UpdateIndexRequest = struct(
  n0,
  _UIR,
  0,
  [_aIp, _iI, _dN, _d, _cC, _dAC],
  [[0, 1], [0, 1], 0, 0, () => IndexCapacityConfiguration, () => DocumentAttributeConfigurations]
);
export var UpdateIndexResponse = struct(n0, _UIRp, 0, [], []);
export var ClientIdsForOIDC = 64 | 0;

export var DocumentAttributeConfigurations = list(n0, _DACocum, 0, () => DocumentAttributeConfiguration);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/applications/{applicationId}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetIndex = op(
  n0,
  _GI,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}", 200],
  },
  () => GetIndexRequest,
  () => GetIndexResponse
);
export var UpdateApplication = op(
  n0,
  _UAp,
  {
    [_ht]: ["PUT", "/applications/{applicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
export var UpdateIndex = op(
  n0,
  _UI,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/indices/{indexId}", 200],
  },
  () => UpdateIndexRequest,
  () => UpdateIndexResponse
);
