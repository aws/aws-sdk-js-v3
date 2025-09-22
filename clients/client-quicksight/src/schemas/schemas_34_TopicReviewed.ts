// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AIns,
  _AInsw,
  _BDTRA,
  _BDTRAR,
  _BDTRARa,
  _Err,
  _h,
  _IA,
  _ITRA,
  _ITRAn,
  _RI,
  _SAu,
  _St,
  _STRA,
  _STRAu,
  _TAo,
  _TIo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteTopicReviewedAnswerRequest = struct(
  n0,
  _BDTRAR,
  0,
  [_AAI, _TIo, _AIns],
  [[0, 1], [0, 1], 64 | 0]
);
export var BatchDeleteTopicReviewedAnswerResponse = struct(
  n0,
  _BDTRARa,
  0,
  [_TIo, _TAo, _SAu, _IA, _RI, _St],
  [0, 0, () => SucceededTopicReviewedAnswers, () => InvalidTopicReviewedAnswers, 0, [1, 32]]
);
export var InvalidTopicReviewedAnswer = struct(n0, _ITRA, 0, [_AInsw, _Err], [0, 0]);
export var SucceededTopicReviewedAnswer = struct(n0, _STRA, 0, [_AInsw], [0]);
export var AnswerIds = 64 | 0;

export var InvalidTopicReviewedAnswers = list(n0, _ITRAn, 0, () => InvalidTopicReviewedAnswer);
export var SucceededTopicReviewedAnswers = list(n0, _STRAu, 0, () => SucceededTopicReviewedAnswer);
export var BatchDeleteTopicReviewedAnswer = op(
  n0,
  _BDTRA,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/topics/{TopicId}/batch-delete-reviewed-answers", 200],
  },
  () => BatchDeleteTopicReviewedAnswerRequest,
  () => BatchDeleteTopicReviewedAnswerResponse
);
