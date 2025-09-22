// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _comp,
  _da,
  _do,
  _f,
  _htt,
  _IID,
  _iID,
  _iIn,
  _mR,
  _nT,
  _oKBST,
  _QA,
  _QAR,
  _QARu,
  _QC,
  _qC,
  _QCE,
  _QCI,
  _QID,
  _qID,
  _QRL,
  _qT,
  _QTID,
  _qTID,
  _RDes,
  _resu,
  _rIes,
  _rS,
  _sI,
  _si,
  _t,
  _te,
  _v,
  n0,
} from "./schemas_0";
import { DataSummary, Document, QueryText } from "./schemas_5_Message";

/* eslint no-var: 0 */

export var IntentInputData = struct(n0, _IID, 0, [_iIn], [0]);
export var QueryAssistantRequest = struct(
  n0,
  _QAR,
  0,
  [_aI, _qT, _nT, _mR, _sI, _qC, _qID, _oKBST],
  [[0, 1], [() => QueryText, 0], 0, 1, 0, () => QueryConditionExpression, [() => QueryInputData, 0], 0]
);
export var QueryAssistantResponse = struct(n0, _QARu, 0, [_resu, _nT], [[() => QueryResultsList, 0], 0]);
export var QueryConditionItem = struct(n0, _QCI, 0, [_f, _comp, _v], [0, 0, 0]);
export var QueryTextInputData = struct(n0, _QTID, 0, [_te], [[() => QueryText, 0]]);
export var ResultData = struct(
  n0,
  _RDes,
  0,
  [_rIes, _do, _rS, _da, _t],
  [0, [() => Document, 0], 1, [() => DataSummary, 0], 0]
);
export var QueryConditionExpression = list(n0, _QCE, 0, () => QueryCondition);
export var QueryResultsList = list(n0, _QRL, 0, [() => ResultData, 0]);
export var QueryCondition = uni(n0, _QC, 0, [_si], [() => QueryConditionItem]);
export var QueryInputData = uni(n0, _QID, 0, [_qTID, _iID], [[() => QueryTextInputData, 0], () => IntentInputData]);
export var QueryAssistant = op(
  n0,
  _QA,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/query", 200],
  },
  () => QueryAssistantRequest,
  () => QueryAssistantResponse
);
