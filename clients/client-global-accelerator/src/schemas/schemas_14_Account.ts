// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAt,
  _APd,
  _AR,
  _At,
  _C,
  _CAA,
  _CT,
  _DCAAe,
  _DCAARe,
  _DCAARes,
  _EI,
  _LMT,
  _N,
  _P,
  _R,
  _Re,
  _Reg,
  _RP,
  _RR,
  _UCAA,
  _UCAAR,
  _UCAARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attachment = struct(n0, _At, 0, [_AAt, _N, _P, _R, _LMT, _CT], [0, 0, 64 | 0, () => Resources, 4, 4]);
export var DescribeCrossAccountAttachmentRequest = struct(n0, _DCAARe, 0, [_AAt], [0]);
export var DescribeCrossAccountAttachmentResponse = struct(n0, _DCAARes, 0, [_CAA], [() => Attachment]);
export var Resource = struct(n0, _Re, 0, [_EI, _C, _Reg], [0, 0, 0]);
export var UpdateCrossAccountAttachmentRequest = struct(
  n0,
  _UCAAR,
  0,
  [_AAt, _N, _APd, _RP, _AR, _RR],
  [0, 0, 64 | 0, 64 | 0, () => Resources, () => Resources]
);
export var UpdateCrossAccountAttachmentResponse = struct(n0, _UCAARp, 0, [_CAA], [() => Attachment]);
export var Principals = 64 | 0;

export var Resources = list(n0, _R, 0, () => Resource);
export var DescribeCrossAccountAttachment = op(
  n0,
  _DCAAe,
  0,
  () => DescribeCrossAccountAttachmentRequest,
  () => DescribeCrossAccountAttachmentResponse
);
export var UpdateCrossAccountAttachment = op(
  n0,
  _UCAA,
  0,
  () => UpdateCrossAccountAttachmentRequest,
  () => UpdateCrossAccountAttachmentResponse
);
