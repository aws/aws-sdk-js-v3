// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _AT,
  _At,
  _aT,
  _CNI,
  _cNI,
  _EL,
  _eL,
  _h,
  _hQ,
  _LAis,
  _LAR,
  _LARi,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _st,
  Attachment,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAttachmentsRequest = struct(
  n0,
  _LAR,
  0,
  [_CNI, _AT, _EL, _S, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aT,
      },
    ],
    [
      0,
      {
        [_hQ]: _eL,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAttachmentsResponse = struct(n0, _LARi, 0, [_At, _NT], [() => AttachmentList, 0]);
export var AttachmentList = list(n0, _AL, 0, () => Attachment);
export var ListAttachments = op(
  n0,
  _LAis,
  {
    [_h]: ["GET", "/attachments", 200],
  },
  () => ListAttachmentsRequest,
  () => ListAttachmentsResponse
);
