// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AA, _AAR, _AARc, _AI, _h, Attachment, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptAttachmentRequest = struct(n0, _AAR, 0, [_AI], [[0, 1]]);
export var AcceptAttachmentResponse = struct(n0, _AARc, 0, [_A], [() => Attachment]);
export var AcceptAttachment = op(
  n0,
  _AA,
  {
    [_h]: ["POST", "/attachments/{AttachmentId}/accept", 200],
  },
  () => AcceptAttachmentRequest,
  () => AcceptAttachmentResponse
);
