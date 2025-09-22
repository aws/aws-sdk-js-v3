// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aIDc,
  _aIDct,
  _aIDcti,
  _aN,
  _ca,
  _d,
  _dI,
  _dV,
  _eP,
  _f,
  _ht,
  _i,
  _LSSA,
  _LSSAR,
  _LSSARi,
  _mR,
  _mSFC,
  _nT,
  _o,
  _p,
  _PSSA,
  _PSSAR,
  _RSSA,
  _RSSAR,
  _RSSARe,
  _SDP,
  _SSAD,
  _SSADo,
  _SSARF,
  _sSIDo,
  _tS,
  n0,
  SsmDocumentExternalParameters,
  SsmDocumentParameters,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSourceServerActionsRequest = struct(
  n0,
  _LSSAR,
  0,
  [_sSIDo, _f, _mR, _nT, _aIDc],
  [0, () => SourceServerActionsRequestFilters, 1, 0, 0]
);
export var ListSourceServerActionsResponse = struct(n0, _LSSARi, 0, [_i, _nT], [() => SourceServerActionDocuments, 0]);
export var PutSourceServerActionRequest = struct(
  n0,
  _PSSAR,
  0,
  [_sSIDo, _aN, _dI, _o, _aIDct, _dV, _ac, _tS, _mSFC, _p, _eP, _d, _ca, _aIDc],
  [0, 0, 0, 1, 0, 0, 2, 1, 2, () => SsmDocumentParameters, () => SsmDocumentExternalParameters, 0, 0, 0]
);
export var RemoveSourceServerActionRequest = struct(n0, _RSSAR, 0, [_sSIDo, _aIDct, _aIDc], [0, 0, 0]);
export var RemoveSourceServerActionResponse = struct(n0, _RSSARe, 0, [], []);
export var SourceServerActionDocument = struct(
  n0,
  _SSAD,
  0,
  [_aIDct, _aN, _dI, _o, _dV, _ac, _tS, _mSFC, _p, _eP, _d, _ca],
  [0, 0, 0, 1, 0, 2, 1, 2, () => SsmDocumentParameters, () => SsmDocumentExternalParameters, 0, 0]
);
export var SourceServerActionsRequestFilters = struct(n0, _SSARF, 0, [_aIDcti], [64 | 0]);
export var ActionIDs = 64 | 0;

export var SourceServerActionDocuments = list(n0, _SSADo, 0, () => SourceServerActionDocument);
export var ListSourceServerActions = op(
  n0,
  _LSSA,
  {
    [_ht]: ["POST", "/ListSourceServerActions", 200],
  },
  () => ListSourceServerActionsRequest,
  () => ListSourceServerActionsResponse
);
export var PutSourceServerAction = op(
  n0,
  _PSSA,
  {
    [_ht]: ["POST", "/PutSourceServerAction", 200],
  },
  () => PutSourceServerActionRequest,
  () => SourceServerActionDocument
);
export var RemoveSourceServerAction = op(
  n0,
  _RSSA,
  {
    [_ht]: ["POST", "/RemoveSourceServerAction", 204],
  },
  () => RemoveSourceServerActionRequest,
  () => RemoveSourceServerActionResponse
);
