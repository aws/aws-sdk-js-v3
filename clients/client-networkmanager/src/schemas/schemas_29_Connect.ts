// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AI, _CAO, _CAo, _GCA, _GCAR, _GCARe, _h, _O, _P, _TAI, Attachment, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectAttachment = struct(
  n0,
  _CAo,
  0,
  [_A, _TAI, _O],
  [() => Attachment, 0, () => ConnectAttachmentOptions]
);
export var ConnectAttachmentOptions = struct(n0, _CAO, 0, [_P], [0]);
export var GetConnectAttachmentRequest = struct(n0, _GCAR, 0, [_AI], [[0, 1]]);
export var GetConnectAttachmentResponse = struct(n0, _GCARe, 0, [_CAo], [() => ConnectAttachment]);
export var GetConnectAttachment = op(
  n0,
  _GCA,
  {
    [_h]: ["GET", "/connect-attachments/{AttachmentId}", 200],
  },
  () => GetConnectAttachmentRequest,
  () => GetConnectAttachmentResponse
);
