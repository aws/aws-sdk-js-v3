// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BeforeCommitIdAndAfterCommitIdAreSameException as __BeforeCommitIdAndAfterCommitIdAreSameException,
  CommentContentRequiredException as __CommentContentRequiredException,
  CommentContentSizeLimitExceededException as __CommentContentSizeLimitExceededException,
  CommentDeletedException as __CommentDeletedException,
  CommentDoesNotExistException as __CommentDoesNotExistException,
  CommentIdRequiredException as __CommentIdRequiredException,
  CommentNotCreatedByCallerException as __CommentNotCreatedByCallerException,
  InvalidCommentIdException as __InvalidCommentIdException,
  InvalidFileLocationException as __InvalidFileLocationException,
  InvalidFilePositionException as __InvalidFilePositionException,
  InvalidReactionValueException as __InvalidReactionValueException,
  InvalidRelativeFileVersionEnumException as __InvalidRelativeFileVersionEnumException,
  ReactionLimitExceededException as __ReactionLimitExceededException,
  ReactionValueRequiredException as __ReactionValueRequiredException,
} from "../models/index";
import {
  _aA,
  _aBI,
  _aCI,
  _bBI,
  _BCIAACIASE,
  _bCIe,
  _C,
  _c,
  _CCRE,
  _CCSLEE,
  _cD,
  _CDE,
  _CDNEE,
  _cIom,
  _CIRE,
  _CNCBCE,
  _comme,
  _con,
  _cR,
  _cRT,
  _d,
  _DCC,
  _DCCI,
  _DCCO,
  _e,
  _fP,
  _fPil,
  _GC,
  _GCI,
  _GCO,
  _ICIE,
  _IFLE,
  _IFPE,
  _IRFVEE,
  _iRT,
  _IRVE,
  _L,
  _l,
  _lMD,
  _m,
  _PCFCC,
  _PCFCCI,
  _PCFCCO,
  _PCFPR,
  _PCFPRI,
  _PCFPRO,
  _PCR,
  _PCRI,
  _PCRIu,
  _PCRO,
  _PCRu,
  _pRI,
  _rC,
  _rFV,
  _RLEE,
  _rN,
  _rV,
  _RVRE,
  _UC,
  _UCI,
  _UCO,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BeforeCommitIdAndAfterCommitIdAreSameException = error(
  n0,
  _BCIAACIASE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BeforeCommitIdAndAfterCommitIdAreSameException
);
export var Comment = struct(
  n0,
  _C,
  0,
  [_cIom, _con, _iRT, _cD, _lMD, _aA, _d, _cRT, _cR, _rC],
  [0, 0, 0, 4, 4, 0, 2, 0, 64 | 0, 128 | 1]
);
export var CommentContentRequiredException = error(
  n0,
  _CCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentContentRequiredException
);
export var CommentContentSizeLimitExceededException = error(
  n0,
  _CCSLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentContentSizeLimitExceededException
);
export var CommentDeletedException = error(
  n0,
  _CDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentDeletedException
);
export var CommentDoesNotExistException = error(
  n0,
  _CDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentDoesNotExistException
);
export var CommentIdRequiredException = error(
  n0,
  _CIRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentIdRequiredException
);
export var CommentNotCreatedByCallerException = error(
  n0,
  _CNCBCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommentNotCreatedByCallerException
);
export var DeleteCommentContentInput = struct(n0, _DCCI, 0, [_cIom], [0]);
export var DeleteCommentContentOutput = struct(n0, _DCCO, 0, [_comme], [() => Comment]);
export var GetCommentInput = struct(n0, _GCI, 0, [_cIom], [0]);
export var GetCommentOutput = struct(n0, _GCO, 0, [_comme], [() => Comment]);
export var InvalidCommentIdException = error(
  n0,
  _ICIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidCommentIdException
);
export var InvalidFileLocationException = error(
  n0,
  _IFLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidFileLocationException
);
export var InvalidFilePositionException = error(
  n0,
  _IFPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidFilePositionException
);
export var InvalidReactionValueException = error(
  n0,
  _IRVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidReactionValueException
);
export var InvalidRelativeFileVersionEnumException = error(
  n0,
  _IRFVEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRelativeFileVersionEnumException
);
export var Location = struct(n0, _L, 0, [_fP, _fPil, _rFV], [0, 1, 0]);
export var PostCommentForComparedCommitInput = struct(
  n0,
  _PCFCCI,
  0,
  [_rN, _bCIe, _aCI, _l, _con, _cRT],
  [0, 0, 0, () => Location, 0, [0, 4]]
);
export var PostCommentForComparedCommitOutput = struct(
  n0,
  _PCFCCO,
  0,
  [_rN, _bCIe, _aCI, _bBI, _aBI, _l, _comme],
  [0, 0, 0, 0, 0, () => Location, () => Comment]
);
export var PostCommentForPullRequestInput = struct(
  n0,
  _PCFPRI,
  0,
  [_pRI, _rN, _bCIe, _aCI, _l, _con, _cRT],
  [0, 0, 0, 0, () => Location, 0, [0, 4]]
);
export var PostCommentForPullRequestOutput = struct(
  n0,
  _PCFPRO,
  0,
  [_rN, _pRI, _bCIe, _aCI, _bBI, _aBI, _l, _comme],
  [0, 0, 0, 0, 0, 0, () => Location, () => Comment]
);
export var PostCommentReplyInput = struct(n0, _PCRI, 0, [_iRT, _cRT, _con], [0, [0, 4], 0]);
export var PostCommentReplyOutput = struct(n0, _PCRO, 0, [_comme], [() => Comment]);
export var PutCommentReactionInput = struct(n0, _PCRIu, 0, [_cIom, _rV], [0, 0]);
export var ReactionLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReactionLimitExceededException
);
export var ReactionValueRequiredException = error(
  n0,
  _RVRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReactionValueRequiredException
);
export var UpdateCommentInput = struct(n0, _UCI, 0, [_cIom, _con], [0, 0]);
export var UpdateCommentOutput = struct(n0, _UCO, 0, [_comme], [() => Comment]);
export var CallerReactions = 64 | 0;

export var ReactionCountsMap = 128 | 1;

export var DeleteCommentContent = op(
  n0,
  _DCC,
  0,
  () => DeleteCommentContentInput,
  () => DeleteCommentContentOutput
);
export var GetComment = op(
  n0,
  _GC,
  0,
  () => GetCommentInput,
  () => GetCommentOutput
);
export var PostCommentForComparedCommit = op(
  n0,
  _PCFCC,
  2,
  () => PostCommentForComparedCommitInput,
  () => PostCommentForComparedCommitOutput
);
export var PostCommentForPullRequest = op(
  n0,
  _PCFPR,
  2,
  () => PostCommentForPullRequestInput,
  () => PostCommentForPullRequestOutput
);
export var PostCommentReply = op(
  n0,
  _PCR,
  2,
  () => PostCommentReplyInput,
  () => PostCommentReplyOutput
);
export var PutCommentReaction = op(
  n0,
  _PCRu,
  0,
  () => PutCommentReactionInput,
  () => Unit
);
export var UpdateComment = op(
  n0,
  _UC,
  0,
  () => UpdateCommentInput,
  () => UpdateCommentOutput
);
