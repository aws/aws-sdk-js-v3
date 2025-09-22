// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _cI,
  _com,
  _hQ,
  _ht,
  _mCA,
  _mIe,
  _mUe,
  _MUF,
  _PF,
  _PFR,
  _rea,
  _sAub,
  _uI,
  _us,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MessageUsefulnessFeedback = struct(n0, _MUF, 0, [_us, _rea, _com, _sAub], [0, 0, 0, 4]);
export var PutFeedbackRequest = struct(
  n0,
  _PFR,
  0,
  [_aIp, _uI, _cI, _mIe, _mCA, _mUe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [0, 1],
    [0, 1],
    4,
    () => MessageUsefulnessFeedback,
  ]
);
export var PutFeedback = op(
  n0,
  _PF,
  {
    [_ht]: ["POST", "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback", 200],
  },
  () => PutFeedbackRequest,
  () => Unit
);
