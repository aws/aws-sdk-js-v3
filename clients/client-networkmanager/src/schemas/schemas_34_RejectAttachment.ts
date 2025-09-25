// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AI, _h, _RAe, _RAR, _RARe, Attachment, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectAttachmentRequest = struct(n0, _RAR, 0, [_AI], [[0, 1]]);
export var RejectAttachmentResponse = struct(n0, _RARe, 0, [_A], [() => Attachment]);
export var RejectAttachment = op(
  n0,
  _RAe,
  {
    [_h]: ["POST", "/attachments/{AttachmentId}/reject", 200],
  },
  () => RejectAttachmentRequest,
  () => RejectAttachmentResponse
);
