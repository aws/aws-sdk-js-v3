// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AI, _DAe, _DAR, _DARe, _h, Attachment, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAttachmentRequest = struct(n0, _DAR, 0, [_AI], [[0, 1]]);
export var DeleteAttachmentResponse = struct(n0, _DARe, 0, [_A], [() => Attachment]);
export var DeleteAttachment = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/attachments/{AttachmentId}", 200],
  },
  () => DeleteAttachmentRequest,
  () => DeleteAttachmentResponse
);
