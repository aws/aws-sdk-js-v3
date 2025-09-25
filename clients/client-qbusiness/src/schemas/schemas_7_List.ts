// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  LicenseNotFoundException as __LicenseNotFoundException,
  MediaTooLargeException as __MediaTooLargeException,
} from "../models/index";
import {
  _aIp,
  _aIt,
  _AL,
  _At,
  _att,
  _C,
  _c,
  _cA,
  _cF,
  _CFS,
  _cI,
  _Co,
  _conv,
  _conve,
  _CS,
  _DAel,
  _DARel,
  _DARele,
  _DCe,
  _DCR,
  _DCRe,
  _e,
  _fS,
  _fT,
  _GMe,
  _GMR,
  _GMRe,
  _hE,
  _hQ,
  _ht,
  _LAi,
  _LARis,
  _LARist,
  _LC,
  _LCR,
  _LCRi,
  _LNFE,
  _m,
  _mB,
  _md,
  _mI,
  _mIe,
  _mMT,
  _mRa,
  _MTLE,
  _n,
  _nT,
  _s,
  _sT,
  _ti,
  _uI,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attachment = struct(
  n0,
  _At,
  0,
  [_aIt, _cI, _n, _cF, _fT, _fS, _md, _cA, _s, _e],
  [0, 0, 0, () => CopyFromSource, 0, 1, 0, 4, 0, () => ErrorDetail]
);
export var Conversation = struct(n0, _C, 0, [_cI, _ti, _sT], [0, 0, 4]);
export var ConversationSource = struct(n0, _CS, 0, [_cI, _aIt], [0, 0]);
export var DeleteAttachmentRequest = struct(
  n0,
  _DARel,
  0,
  [_aIp, _cI, _aIt, _uI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
  ]
);
export var DeleteAttachmentResponse = struct(n0, _DARele, 0, [], []);
export var DeleteConversationRequest = struct(
  n0,
  _DCR,
  0,
  [_cI, _aIp, _uI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
  ]
);
export var DeleteConversationResponse = struct(n0, _DCRe, 0, [], []);
export var GetMediaRequest = struct(
  n0,
  _GMR,
  0,
  [_aIp, _cI, _mIe, _mI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetMediaResponse = struct(n0, _GMRe, 0, [_mB, _mMT], [21, 0]);
export var LicenseNotFoundException = error(
  n0,
  _LNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LicenseNotFoundException
);
export var ListAttachmentsRequest = struct(
  n0,
  _LARis,
  0,
  [_aIp, _cI, _uI, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListAttachmentsResponse = struct(n0, _LARist, 0, [_att, _nT], [() => AttachmentList, 0]);
export var ListConversationsRequest = struct(
  n0,
  _LCR,
  0,
  [_aIp, _uI, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListConversationsResponse = struct(n0, _LCRi, 0, [_nT, _conv], [0, () => Conversations]);
export var MediaTooLargeException = error(
  n0,
  _MTLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MediaTooLargeException
);
export var AttachmentList = list(n0, _AL, 0, () => Attachment);
export var Conversations = list(n0, _Co, 0, () => Conversation);
export var CopyFromSource = uni(n0, _CFS, 0, [_conve], [() => ConversationSource]);
export var DeleteAttachment = op(
  n0,
  _DAel,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/conversations/{conversationId}/attachments/{attachmentId}", 200],
  },
  () => DeleteAttachmentRequest,
  () => DeleteAttachmentResponse
);
export var DeleteConversation = op(
  n0,
  _DCe,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/conversations/{conversationId}", 200],
  },
  () => DeleteConversationRequest,
  () => DeleteConversationResponse
);
export var GetMedia = op(
  n0,
  _GMe,
  {
    [_ht]: [
      "GET",
      "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}",
      200,
    ],
  },
  () => GetMediaRequest,
  () => GetMediaResponse
);
export var ListAttachments = op(
  n0,
  _LAi,
  {
    [_ht]: ["GET", "/applications/{applicationId}/attachments", 200],
  },
  () => ListAttachmentsRequest,
  () => ListAttachmentsResponse
);
export var ListConversations = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/applications/{applicationId}/conversations", 200],
  },
  () => ListConversationsRequest,
  () => ListConversationsResponse
);
