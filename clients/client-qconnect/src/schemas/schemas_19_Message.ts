// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aTt,
  _CMT,
  _CMTR,
  _CMTRr,
  _con,
  _cr,
  _cSh,
  _cTl,
  _cTr,
  _d,
  _dA,
  _GC,
  _gC,
  _GCr,
  _GV,
  _GVr,
  _htt,
  _kBA,
  _kBI,
  _la,
  _lMB,
  _lMT,
  _mTA,
  _mTCS,
  _MTD,
  _mTe,
  _mTI,
  _n,
  _ta,
  _UMT,
  _UMTM,
  _UMTMR,
  _UMTMRp,
  _UMTR,
  _UMTRp,
  _va,
  n0,
} from "./schemas_0";
import { MessageTemplateAttributes, MessageTemplateContentProvider } from "./schemas_11_MessageTemplate";

/* eslint no-var: 0 */

export var GroupingCriteria = sim(n0, _GC, 0, 8);
export var GroupingValue = sim(n0, _GV, 0, 8);
export var CreateMessageTemplateRequest = struct(
  n0,
  _CMTR,
  0,
  [_kBI, _n, _con, _d, _cSh, _la, _dA, _gC, _cTl, _ta],
  [
    [0, 1],
    0,
    [() => MessageTemplateContentProvider, 0],
    0,
    0,
    0,
    [() => MessageTemplateAttributes, 0],
    [() => GroupingConfiguration, 0],
    [0, 4],
    128 | 0,
  ]
);
export var CreateMessageTemplateResponse = struct(n0, _CMTRr, 0, [_mTe], [[() => MessageTemplateData, 0]]);
export var GroupingConfiguration = struct(
  n0,
  _GCr,
  0,
  [_cr, _va],
  [
    [() => GroupingCriteria, 0],
    [() => GroupingValues, 0],
  ]
);
export var MessageTemplateData = struct(
  n0,
  _MTD,
  0,
  [_mTA, _mTI, _kBA, _kBI, _n, _cSh, _cTr, _lMT, _lMB, _con, _d, _la, _gC, _dA, _aTt, _mTCS, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    [() => MessageTemplateContentProvider, 0],
    0,
    0,
    [() => GroupingConfiguration, 0],
    [() => MessageTemplateAttributes, 0],
    64 | 0,
    0,
    128 | 0,
  ]
);
export var UpdateMessageTemplateMetadataRequest = struct(
  n0,
  _UMTMR,
  0,
  [_kBI, _mTI, _n, _d, _gC],
  [[0, 1], [0, 1], 0, 0, [() => GroupingConfiguration, 0]]
);
export var UpdateMessageTemplateMetadataResponse = struct(n0, _UMTMRp, 0, [_mTe], [[() => MessageTemplateData, 0]]);
export var UpdateMessageTemplateRequest = struct(
  n0,
  _UMTR,
  0,
  [_kBI, _mTI, _con, _la, _dA],
  [[0, 1], [0, 1], [() => MessageTemplateContentProvider, 0], 0, [() => MessageTemplateAttributes, 0]]
);
export var UpdateMessageTemplateResponse = struct(n0, _UMTRp, 0, [_mTe], [[() => MessageTemplateData, 0]]);
export var GroupingValues = list(n0, _GVr, 0, [() => GroupingValue, 0]);
export var MessageTemplateAttributeTypeList = 64 | 0;

export var CreateMessageTemplate = op(
  n0,
  _CMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates", 200],
  },
  () => CreateMessageTemplateRequest,
  () => CreateMessageTemplateResponse
);
export var UpdateMessageTemplate = op(
  n0,
  _UMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}", 200],
  },
  () => UpdateMessageTemplateRequest,
  () => UpdateMessageTemplateResponse
);
export var UpdateMessageTemplateMetadata = op(
  n0,
  _UMTM,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/metadata", 200],
  },
  () => UpdateMessageTemplateMetadataRequest,
  () => UpdateMessageTemplateMetadataResponse
);
