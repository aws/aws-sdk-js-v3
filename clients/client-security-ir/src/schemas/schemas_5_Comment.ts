// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _b, _CB, _CCC, _CCCR, _CCCRr, _cI, _cIo, _cT, _h, _UCC, _UCCR, _UCCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CommentBody = sim(n0, _CB, 0, 8);
export var CreateCaseCommentRequest = struct(
  n0,
  _CCCR,
  0,
  [_cI, _cT, _b],
  [
    [0, 1],
    [0, 4],
    [() => CommentBody, 0],
  ]
);
export var CreateCaseCommentResponse = struct(n0, _CCCRr, 0, [_cIo], [0]);
export var UpdateCaseCommentRequest = struct(
  n0,
  _UCCR,
  0,
  [_cI, _cIo, _b],
  [
    [0, 1],
    [0, 1],
    [() => CommentBody, 0],
  ]
);
export var UpdateCaseCommentResponse = struct(n0, _UCCRp, 0, [_cIo, _b], [0, [() => CommentBody, 0]]);
export var CreateCaseComment = op(
  n0,
  _CCC,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/create-comment", 201],
  },
  () => CreateCaseCommentRequest,
  () => CreateCaseCommentResponse
);
export var UpdateCaseComment = op(
  n0,
  _UCC,
  {
    [_h]: ["PUT", "/v1/cases/{caseId}/update-case-comment/{commentId}", 200],
  },
  () => UpdateCaseCommentRequest,
  () => UpdateCaseCommentResponse
);
