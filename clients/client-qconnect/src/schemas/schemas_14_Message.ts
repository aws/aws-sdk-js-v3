// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMT,
  _AMTR,
  _AMTRc,
  _aVN,
  _cSh,
  _cTr,
  _d,
  _DMT,
  _DMTR,
  _DMTRe,
  _hQ,
  _htt,
  _kBA,
  _kBI,
  _lMB,
  _LMT,
  _lMT,
  _LMTR,
  _LMTRi,
  _mR,
  _mTA,
  _mTI,
  _MTS,
  _mTS,
  _MTSL,
  _n,
  _nT,
  _ta,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateMessageTemplateRequest = struct(n0, _AMTR, 0, [_kBI, _mTI, _vN], [[0, 1], [0, 1], 1]);
export var ActivateMessageTemplateResponse = struct(n0, _AMTRc, 0, [_mTA, _mTI, _vN], [0, 0, 1]);
export var DeactivateMessageTemplateRequest = struct(n0, _DMTR, 0, [_kBI, _mTI, _vN], [[0, 1], [0, 1], 1]);
export var DeactivateMessageTemplateResponse = struct(n0, _DMTRe, 0, [_mTA, _mTI, _vN], [0, 0, 1]);
export var ListMessageTemplatesRequest = struct(
  n0,
  _LMTR,
  0,
  [_nT, _mR, _kBI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListMessageTemplatesResponse = struct(n0, _LMTRi, 0, [_mTS, _nT], [() => MessageTemplateSummaryList, 0]);
export var MessageTemplateSummary = struct(
  n0,
  _MTS,
  0,
  [_mTA, _mTI, _kBA, _kBI, _n, _cSh, _cTr, _lMT, _lMB, _aVN, _d, _ta],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 1, 0, 128 | 0]
);
export var MessageTemplateSummaryList = list(n0, _MTSL, 0, () => MessageTemplateSummary);
export var ActivateMessageTemplate = op(
  n0,
  _AMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/activate", 200],
  },
  () => ActivateMessageTemplateRequest,
  () => ActivateMessageTemplateResponse
);
export var DeactivateMessageTemplate = op(
  n0,
  _DMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/deactivate", 200],
  },
  () => DeactivateMessageTemplateRequest,
  () => DeactivateMessageTemplateResponse
);
export var ListMessageTemplates = op(
  n0,
  _LMT,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/messageTemplates", 200],
  },
  () => ListMessageTemplatesRequest,
  () => ListMessageTemplatesResponse
);
