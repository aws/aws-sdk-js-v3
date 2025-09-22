// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bo,
  _Co,
  _CTr,
  _DAe,
  _GSS,
  _GSSR,
  _LRRS,
  _LRRSR,
  _LRRSRi,
  _LT,
  _LTR,
  _LTRi,
  _MIa,
  _N,
  _NT,
  _Rej,
  _RRSL,
  _RRSM,
  _RS,
  _SDP,
  _SDPe,
  _SDPL,
  _Ti,
  _TM,
  _TMe,
  _TML,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSendStatisticsResponse = struct(n0, _GSSR, 0, [_SDP], [() => SendDataPointList]);
export var ListReceiptRuleSetsRequest = struct(n0, _LRRSR, 0, [_NT], [0]);
export var ListReceiptRuleSetsResponse = struct(n0, _LRRSRi, 0, [_RS, _NT], [() => ReceiptRuleSetsLists, 0]);
export var ListTemplatesRequest = struct(n0, _LTR, 0, [_NT, _MIa], [0, 1]);
export var ListTemplatesResponse = struct(n0, _LTRi, 0, [_TM, _NT], [() => TemplateMetadataList, 0]);
export var ReceiptRuleSetMetadata = struct(n0, _RRSM, 0, [_N, _CTr], [0, 4]);
export var SendDataPoint = struct(n0, _SDPe, 0, [_Ti, _DAe, _Bo, _Co, _Rej], [4, 1, 1, 1, 1]);
export var TemplateMetadata = struct(n0, _TMe, 0, [_N, _CTr], [0, 4]);
export var ReceiptRuleSetsLists = list(n0, _RRSL, 0, () => ReceiptRuleSetMetadata);
export var SendDataPointList = list(n0, _SDPL, 0, () => SendDataPoint);
export var TemplateMetadataList = list(n0, _TML, 0, () => TemplateMetadata);
export var GetSendStatistics = op(
  n0,
  _GSS,
  0,
  () => Unit,
  () => GetSendStatisticsResponse
);
export var ListReceiptRuleSets = op(
  n0,
  _LRRS,
  0,
  () => ListReceiptRuleSetsRequest,
  () => ListReceiptRuleSetsResponse
);
export var ListTemplates = op(
  n0,
  _LT,
  0,
  () => ListTemplatesRequest,
  () => ListTemplatesResponse
);
