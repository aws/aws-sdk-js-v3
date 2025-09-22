// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AttachmentIdNotFound as __AttachmentIdNotFound,
  AttachmentLimitExceeded as __AttachmentLimitExceeded,
  AttachmentSetSizeLimitExceeded as __AttachmentSetSizeLimitExceeded,
  DescribeAttachmentLimitExceeded as __DescribeAttachmentLimitExceeded,
} from "../models/index";
import {
  _A,
  _a,
  _AATS,
  _AATSR,
  _AATSRd,
  _aI,
  _AINF,
  _ALE,
  _aSI,
  _ASSLE,
  _At,
  _at,
  _c,
  _d,
  _DA,
  _DALE,
  _DAR,
  _DARe,
  _e,
  _eT,
  _fN,
  _m,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddAttachmentsToSetRequest = struct(n0, _AATSR, 0, [_aSI, _a], [0, () => Attachments]);
export var AddAttachmentsToSetResponse = struct(n0, _AATSRd, 0, [_aSI, _eT], [0, 0]);
export var Attachment = struct(n0, _A, 0, [_fN, _d], [0, 21]);
export var AttachmentIdNotFound = error(
  n0,
  _AINF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AttachmentIdNotFound
);
export var AttachmentLimitExceeded = error(
  n0,
  _ALE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AttachmentLimitExceeded
);
export var AttachmentSetSizeLimitExceeded = error(
  n0,
  _ASSLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AttachmentSetSizeLimitExceeded
);
export var DescribeAttachmentLimitExceeded = error(
  n0,
  _DALE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DescribeAttachmentLimitExceeded
);
export var DescribeAttachmentRequest = struct(n0, _DAR, 0, [_aI], [0]);
export var DescribeAttachmentResponse = struct(n0, _DARe, 0, [_at], [() => Attachment]);
export var Attachments = list(n0, _At, 0, () => Attachment);
export var AddAttachmentsToSet = op(
  n0,
  _AATS,
  0,
  () => AddAttachmentsToSetRequest,
  () => AddAttachmentsToSetResponse
);
export var DescribeAttachment = op(
  n0,
  _DA,
  0,
  () => DescribeAttachmentRequest,
  () => DescribeAttachmentResponse
);
