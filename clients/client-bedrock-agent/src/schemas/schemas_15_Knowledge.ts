// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _d,
  _DKB,
  _DKBR,
  _DKBRe,
  _h,
  _kBI,
  _KBS,
  _KBSn,
  _kBSn,
  _LKB,
  _LKBR,
  _LKBRi,
  _mR,
  _n,
  _nT,
  _st,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKnowledgeBaseRequest = struct(n0, _DKBR, 0, [_kBI], [[0, 1]]);
export var DeleteKnowledgeBaseResponse = struct(n0, _DKBRe, 0, [_kBI, _st], [0, 0]);
export var KnowledgeBaseSummary = struct(n0, _KBS, 0, [_kBI, _n, _d, _st, _uA], [0, 0, 0, 0, 5]);
export var ListKnowledgeBasesRequest = struct(n0, _LKBR, 0, [_mR, _nT], [1, 0]);
export var ListKnowledgeBasesResponse = struct(n0, _LKBRi, 0, [_kBSn, _nT], [() => KnowledgeBaseSummaries, 0]);
export var KnowledgeBaseSummaries = list(n0, _KBSn, 0, () => KnowledgeBaseSummary);
export var DeleteKnowledgeBase = op(
  n0,
  _DKB,
  {
    [_h]: ["DELETE", "/knowledgebases/{knowledgeBaseId}", 202],
  },
  () => DeleteKnowledgeBaseRequest,
  () => DeleteKnowledgeBaseResponse
);
export var ListKnowledgeBases = op(
  n0,
  _LKB,
  {
    [_h]: ["POST", "/knowledgebases/", 200],
  },
  () => ListKnowledgeBasesRequest,
  () => ListKnowledgeBasesResponse
);
