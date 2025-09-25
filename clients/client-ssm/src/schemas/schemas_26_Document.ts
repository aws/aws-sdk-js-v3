// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DocumentVersionLimitExceeded as __DocumentVersionLimitExceeded,
  DuplicateDocumentContent as __DuplicateDocumentContent,
  DuplicateDocumentVersionName as __DuplicateDocumentVersionName,
  InvalidDocumentVersion as __InvalidDocumentVersion,
} from "../models/index";
import {
  _Ac,
  _ACL,
  _ACt,
  _ACtt,
  _aQE,
  _At,
  _Au,
  _c,
  _CD,
  _Co,
  _Con,
  _CTr,
  _D,
  _DD,
  _DDC,
  _DDes,
  _DDRes,
  _DDResc,
  _DDVD,
  _DDVN,
  _DF,
  _DMRI,
  _DNi,
  _Do,
  _DRCL,
  _DRCS,
  _DRoc,
  _DRRL,
  _DRRS,
  _DT,
  _DV,
  _DVe,
  _DVLE,
  _DVN,
  _e,
  _GD,
  _GDR,
  _GDRe,
  _H,
  _HT,
  _IDVn,
  _LDMH,
  _LDMHR,
  _LDMHRi,
  _M,
  _Me,
  _MR,
  _N,
  _NT,
  _Req,
  _Rev,
  _RR,
  _RS,
  _SI,
  _Si,
  _St,
  _TT,
  _Ty,
  _U,
  _UD,
  _UDDV,
  _UDDVR,
  _UDDVRp,
  _UDM,
  _UDMR,
  _UDMRp,
  _UDR,
  _UDRp,
  _UT,
  _VN,
  _xN,
  n0,
} from "./schemas_0";
import { AttachmentsSourceList, DocumentDescription, DocumentRequiresList } from "./schemas_17_Document";

/* eslint no-var: 0 */

export var AttachmentContent = struct(n0, _ACt, 0, [_N, _Si, _H, _HT, _U], [0, 1, 0, 0, 0]);
export var DescribeDocumentRequest = struct(n0, _DDRes, 0, [_N, _DV, _VN], [0, 0, 0]);
export var DescribeDocumentResult = struct(n0, _DDResc, 0, [_Do], [[() => DocumentDescription, 0]]);
export var DocumentDefaultVersionDescription = struct(n0, _DDVD, 0, [_N, _DVe, _DVN], [0, 0, 0]);
export var DocumentMetadataResponseInfo = struct(n0, _DMRI, 0, [_RR], [() => DocumentReviewerResponseList]);
export var DocumentReviewCommentSource = struct(n0, _DRCS, 0, [_Ty, _Con], [0, 0]);
export var DocumentReviewerResponseSource = struct(
  n0,
  _DRRS,
  0,
  [_CTr, _UT, _RS, _Co, _Rev],
  [4, 4, 0, () => DocumentReviewCommentList, 0]
);
export var DocumentReviews = struct(n0, _DRoc, 0, [_Ac, _Co], [0, () => DocumentReviewCommentList]);
export var DocumentVersionLimitExceeded = error(
  n0,
  _DVLE,
  {
    [_e]: _c,
    [_aQE]: [`DocumentVersionLimitExceeded`, 400],
  },
  [_M],
  [0],

  __DocumentVersionLimitExceeded
);
export var DuplicateDocumentContent = error(
  n0,
  _DDC,
  {
    [_e]: _c,
    [_aQE]: [`DuplicateDocumentContent`, 400],
  },
  [_M],
  [0],

  __DuplicateDocumentContent
);
export var DuplicateDocumentVersionName = error(
  n0,
  _DDVN,
  {
    [_e]: _c,
    [_aQE]: [`DuplicateDocumentVersionName`, 400],
  },
  [_M],
  [0],

  __DuplicateDocumentVersionName
);
export var GetDocumentRequest = struct(n0, _GDR, 0, [_N, _VN, _DV, _DF], [0, 0, 0, 0]);
export var GetDocumentResult = struct(
  n0,
  _GDRe,
  0,
  [_N, _CD, _DNi, _VN, _DV, _St, _SI, _Con, _DT, _DF, _Req, _ACtt, _RS],
  [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, () => DocumentRequiresList, [() => AttachmentContentList, 0], 0]
);
export var InvalidDocumentVersion = error(
  n0,
  _IDVn,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDocumentVersion`, 400],
  },
  [_M],
  [0],

  __InvalidDocumentVersion
);
export var ListDocumentMetadataHistoryRequest = struct(n0, _LDMHR, 0, [_N, _DV, _Me, _NT, _MR], [0, 0, 0, 0, 1]);
export var ListDocumentMetadataHistoryResponse = struct(
  n0,
  _LDMHRi,
  0,
  [_N, _DV, _Au, _Me, _NT],
  [0, 0, 0, () => DocumentMetadataResponseInfo, 0]
);
export var UpdateDocumentDefaultVersionRequest = struct(n0, _UDDVR, 0, [_N, _DV], [0, 0]);
export var UpdateDocumentDefaultVersionResult = struct(n0, _UDDVRp, 0, [_D], [() => DocumentDefaultVersionDescription]);
export var UpdateDocumentMetadataRequest = struct(n0, _UDMR, 0, [_N, _DV, _DRoc], [0, 0, () => DocumentReviews]);
export var UpdateDocumentMetadataResponse = struct(n0, _UDMRp, 0, [], []);
export var UpdateDocumentRequest = struct(
  n0,
  _UDR,
  0,
  [_Con, _At, _N, _DNi, _VN, _DV, _DF, _TT],
  [0, () => AttachmentsSourceList, 0, 0, 0, 0, 0, 0]
);
export var UpdateDocumentResult = struct(n0, _UDRp, 0, [_DD], [[() => DocumentDescription, 0]]);
export var AttachmentContentList = list(n0, _ACL, 0, [
  () => AttachmentContent,
  {
    [_xN]: _ACt,
  },
]);
export var DocumentReviewCommentList = list(n0, _DRCL, 0, () => DocumentReviewCommentSource);
export var DocumentReviewerResponseList = list(n0, _DRRL, 0, () => DocumentReviewerResponseSource);
export var DescribeDocument = op(
  n0,
  _DDes,
  0,
  () => DescribeDocumentRequest,
  () => DescribeDocumentResult
);
export var GetDocument = op(
  n0,
  _GD,
  0,
  () => GetDocumentRequest,
  () => GetDocumentResult
);
export var ListDocumentMetadataHistory = op(
  n0,
  _LDMH,
  0,
  () => ListDocumentMetadataHistoryRequest,
  () => ListDocumentMetadataHistoryResponse
);
export var UpdateDocument = op(
  n0,
  _UD,
  0,
  () => UpdateDocumentRequest,
  () => UpdateDocumentResult
);
export var UpdateDocumentDefaultVersion = op(
  n0,
  _UDDV,
  0,
  () => UpdateDocumentDefaultVersionRequest,
  () => UpdateDocumentDefaultVersionResult
);
export var UpdateDocumentMetadata = op(
  n0,
  _UDM,
  0,
  () => UpdateDocumentMetadataRequest,
  () => UpdateDocumentMetadataResponse
);
