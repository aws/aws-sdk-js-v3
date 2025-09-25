// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIt, _DMTA, _DMTAR, _DMTARe, _htt, _kBI, _mTI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMessageTemplateAttachmentRequest = struct(
  n0,
  _DMTAR,
  0,
  [_kBI, _mTI, _aIt],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMessageTemplateAttachmentResponse = struct(n0, _DMTARe, 0, [], []);
export var DeleteMessageTemplateAttachment = op(
  n0,
  _DMTA,
  {
    [_htt]: [
      "DELETE",
      "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments/{attachmentId}",
      204,
    ],
  },
  () => DeleteMessageTemplateAttachmentRequest,
  () => DeleteMessageTemplateAttachmentResponse
);
