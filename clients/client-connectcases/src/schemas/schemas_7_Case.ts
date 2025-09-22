// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _CEID,
  _dI,
  _eB,
  _EBC,
  _EID,
  _en,
  _f,
  _FI,
  _FIL,
  _GCEC,
  _GCECR,
  _GCECRe,
  _h,
  _i,
  _iC,
  _iD,
  _PCEC,
  _PCECR,
  _PCECRu,
  _rID,
  _RIEID,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CaseEventIncludedData = struct(n0, _CEID, 0, [_f], [() => FieldIdentifierList]);
export var EventBridgeConfiguration = struct(n0, _EBC, 0, [_en, _iD], [2, () => EventIncludedData]);
export var EventIncludedData = struct(
  n0,
  _EID,
  0,
  [_cD, _rID],
  [() => CaseEventIncludedData, () => RelatedItemEventIncludedData]
);
export var FieldIdentifier = struct(n0, _FI, 0, [_i], [0]);
export var GetCaseEventConfigurationRequest = struct(n0, _GCECR, 0, [_dI], [[0, 1]]);
export var GetCaseEventConfigurationResponse = struct(n0, _GCECRe, 0, [_eB], [() => EventBridgeConfiguration]);
export var PutCaseEventConfigurationRequest = struct(
  n0,
  _PCECR,
  0,
  [_dI, _eB],
  [[0, 1], () => EventBridgeConfiguration]
);
export var PutCaseEventConfigurationResponse = struct(n0, _PCECRu, 0, [], []);
export var RelatedItemEventIncludedData = struct(n0, _RIEID, 0, [_iC], [2]);
export var FieldIdentifierList = list(n0, _FIL, 0, () => FieldIdentifier);
export var GetCaseEventConfiguration = op(
  n0,
  _GCEC,
  {
    [_h]: ["POST", "/domains/{domainId}/case-event-configuration", 200],
  },
  () => GetCaseEventConfigurationRequest,
  () => GetCaseEventConfigurationResponse
);
export var PutCaseEventConfiguration = op(
  n0,
  _PCEC,
  {
    [_h]: ["PUT", "/domains/{domainId}/case-event-configuration", 200],
  },
  () => PutCaseEventConfigurationRequest,
  () => PutCaseEventConfigurationResponse
);
