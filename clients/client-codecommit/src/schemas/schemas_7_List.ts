// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ActorDoesNotExistException as __ActorDoesNotExistException,
  AuthorDoesNotExistException as __AuthorDoesNotExistException,
  InvalidActorArnException as __InvalidActorArnException,
  InvalidAuthorArnException as __InvalidAuthorArnException,
  InvalidDestinationCommitSpecifierException as __InvalidDestinationCommitSpecifierException,
  InvalidMaxConflictFilesException as __InvalidMaxConflictFilesException,
  InvalidMaxMergeHunksException as __InvalidMaxMergeHunksException,
  InvalidPullRequestEventTypeException as __InvalidPullRequestEventTypeException,
  InvalidReactionUserArnException as __InvalidReactionUserArnException,
  InvalidSourceCommitSpecifierException as __InvalidSourceCommitSpecifierException,
} from "../models/index";
import {
  _aA,
  _aAc,
  _aBI,
  _aCI,
  _ADNEE,
  _ADNEEu,
  _aRC,
  _AREM,
  _aREM,
  _aRI,
  _aRN,
  _AROEM,
  _aROEM,
  _aRTNp,
  _ASCEM,
  _aSCEM,
  _aSp,
  _b,
  _bBI,
  _bCI,
  _bCIe,
  _BDMC,
  _BDMCE,
  _BDMCEa,
  _BDMCI,
  _BDMCO,
  _c,
  _cC,
  _cDL,
  _CFCC,
  _CFCCD,
  _cFCCD,
  _CFPR,
  _CFPRD,
  _cFPRD,
  _cIom,
  _CM,
  _cM,
  _CML,
  _cML,
  _co,
  _Com,
  _comm,
  _Con,
  _Conf,
  _cRS,
  _dCI,
  _dCS,
  _des,
  _DMC,
  _DMCI,
  _DMCO,
  _DPRE,
  _DPREI,
  _DPREO,
  _dR,
  _e,
  _eD,
  _eL,
  _emo,
  _eN,
  _er,
  _fM,
  _fMC,
  _FMi,
  _fP,
  _fPi,
  _FS,
  _fS,
  _GCFCC,
  _GCFCCI,
  _GCFCCO,
  _GCFPR,
  _GCFPRI,
  _GCFPRO,
  _GCR,
  _GCRI,
  _GCRO,
  _GMCe,
  _GMCIe,
  _GMCOe,
  _hC,
  _IAAE,
  _IAAEn,
  _IBF,
  _iBF,
  _iC,
  _IDCSE,
  _IMCFE,
  _IMMHE,
  _IPRETE,
  _IRUAE,
  _ISCSE,
  _l,
  _LAARTFR,
  _LAARTFRI,
  _LAARTFRO,
  _LART,
  _LARTI,
  _LARTO,
  _LPR,
  _LPRI,
  _LPRO,
  _m,
  _mBe,
  _mCF,
  _me,
  _MH,
  _mH,
  _MHD,
  _MHe,
  _mM,
  _mMH,
  _MO,
  _mO,
  _mOe,
  _mR,
  _nOC,
  _nT,
  _oS,
  _OT,
  _oT,
  _oTC,
  _PRCEM,
  _pRCEM,
  _pRE,
  _PREL,
  _pRET,
  _PREu,
  _pRI,
  _pRIu,
  _PRMSCEM,
  _pRMSCEM,
  _pRS,
  _PRSCEM,
  _pRSCEM,
  _PRSRUEM,
  _pRSRUEM,
  _re,
  _RFC,
  _rFC,
  _RFCL,
  _rFDUC,
  _rI,
  _rN,
  _rU,
  _rUA,
  _RVF,
  _sCh,
  _sCI,
  _sCS,
  _sLt,
  _so,
  _u,
  n0,
} from "./schemas_0";
import { MergeMetadata } from "./schemas_8_Pull";
import { Comment, Location } from "./schemas_14_Comment";

/* eslint no-var: 0 */

export var ActorDoesNotExistException = error(
  n0,
  _ADNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ActorDoesNotExistException
);
export var ApprovalRuleEventMetadata = struct(n0, _AREM, 0, [_aRN, _aRI, _aRC], [0, 0, 0]);
export var ApprovalRuleOverriddenEventMetadata = struct(n0, _AROEM, 0, [_rI, _oS], [0, 0]);
export var ApprovalStateChangedEventMetadata = struct(n0, _ASCEM, 0, [_rI, _aSp], [0, 0]);
export var AuthorDoesNotExistException = error(
  n0,
  _ADNEEu,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AuthorDoesNotExistException
);
export var BatchDescribeMergeConflictsError = struct(n0, _BDMCE, 0, [_fP, _eN, _m], [0, 0, 0]);
export var BatchDescribeMergeConflictsInput = struct(
  n0,
  _BDMCI,
  0,
  [_rN, _dCS, _sCS, _mO, _mMH, _mCF, _fPi, _cDL, _cRS, _nT],
  [0, 0, 0, 0, 1, 1, 64 | 0, 0, 0, 0]
);
export var BatchDescribeMergeConflictsOutput = struct(
  n0,
  _BDMCO,
  0,
  [_co, _nT, _er, _dCI, _sCI, _bCI],
  [() => Conflicts, 0, () => BatchDescribeMergeConflictsErrors, 0, 0, 0]
);
export var CommentsForComparedCommit = struct(
  n0,
  _CFCC,
  0,
  [_rN, _bCIe, _aCI, _bBI, _aBI, _l, _comm],
  [0, 0, 0, 0, 0, () => Location, () => Comments]
);
export var CommentsForPullRequest = struct(
  n0,
  _CFPR,
  0,
  [_pRI, _rN, _bCIe, _aCI, _bBI, _aBI, _l, _comm],
  [0, 0, 0, 0, 0, 0, () => Location, () => Comments]
);
export var Conflict = struct(n0, _Con, 0, [_cM, _mH], [() => ConflictMetadata, () => MergeHunks]);
export var ConflictMetadata = struct(
  n0,
  _CM,
  0,
  [_fP, _fS, _fM, _oT, _nOC, _iBF, _cC, _fMC, _oTC, _mOe],
  [0, () => FileSizes, () => FileModes, () => ObjectTypes, 1, () => IsBinaryFile, 2, 2, 2, () => MergeOperations]
);
export var DescribeMergeConflictsInput = struct(
  n0,
  _DMCI,
  0,
  [_rN, _dCS, _sCS, _mO, _mMH, _fP, _cDL, _cRS, _nT],
  [0, 0, 0, 0, 1, 0, 0, 0, 0]
);
export var DescribeMergeConflictsOutput = struct(
  n0,
  _DMCO,
  0,
  [_cM, _mH, _nT, _dCI, _sCI, _bCI],
  [() => ConflictMetadata, () => MergeHunks, 0, 0, 0, 0]
);
export var DescribePullRequestEventsInput = struct(n0, _DPREI, 0, [_pRI, _pRET, _aAc, _nT, _mR], [0, 0, 0, 0, 1]);
export var DescribePullRequestEventsOutput = struct(n0, _DPREO, 0, [_pRE, _nT], [() => PullRequestEventList, 0]);
export var FileModes = struct(n0, _FMi, 0, [_so, _des, _b], [0, 0, 0]);
export var FileSizes = struct(n0, _FS, 0, [_so, _des, _b], [1, 1, 1]);
export var GetCommentReactionsInput = struct(n0, _GCRI, 0, [_cIom, _rUA, _nT, _mR], [0, 0, 0, 1]);
export var GetCommentReactionsOutput = struct(n0, _GCRO, 0, [_rFC, _nT], [() => ReactionsForCommentList, 0]);
export var GetCommentsForComparedCommitInput = struct(n0, _GCFCCI, 0, [_rN, _bCIe, _aCI, _nT, _mR], [0, 0, 0, 0, 1]);
export var GetCommentsForComparedCommitOutput = struct(
  n0,
  _GCFCCO,
  0,
  [_cFCCD, _nT],
  [() => CommentsForComparedCommitData, 0]
);
export var GetCommentsForPullRequestInput = struct(
  n0,
  _GCFPRI,
  0,
  [_pRI, _rN, _bCIe, _aCI, _nT, _mR],
  [0, 0, 0, 0, 0, 1]
);
export var GetCommentsForPullRequestOutput = struct(
  n0,
  _GCFPRO,
  0,
  [_cFPRD, _nT],
  [() => CommentsForPullRequestData, 0]
);
export var GetMergeConflictsInput = struct(
  n0,
  _GMCIe,
  0,
  [_rN, _dCS, _sCS, _mO, _cDL, _mCF, _cRS, _nT],
  [0, 0, 0, 0, 0, 1, 0, 0]
);
export var GetMergeConflictsOutput = struct(
  n0,
  _GMCOe,
  0,
  [_me, _dCI, _sCI, _bCI, _cML, _nT],
  [2, 0, 0, 0, () => ConflictMetadataList, 0]
);
export var InvalidActorArnException = error(
  n0,
  _IAAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidActorArnException
);
export var InvalidAuthorArnException = error(
  n0,
  _IAAEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidAuthorArnException
);
export var InvalidDestinationCommitSpecifierException = error(
  n0,
  _IDCSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidDestinationCommitSpecifierException
);
export var InvalidMaxConflictFilesException = error(
  n0,
  _IMCFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidMaxConflictFilesException
);
export var InvalidMaxMergeHunksException = error(
  n0,
  _IMMHE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidMaxMergeHunksException
);
export var InvalidPullRequestEventTypeException = error(
  n0,
  _IPRETE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidPullRequestEventTypeException
);
export var InvalidReactionUserArnException = error(
  n0,
  _IRUAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidReactionUserArnException
);
export var InvalidSourceCommitSpecifierException = error(
  n0,
  _ISCSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidSourceCommitSpecifierException
);
export var IsBinaryFile = struct(n0, _IBF, 0, [_so, _des, _b], [2, 2, 2]);
export var ListApprovalRuleTemplatesInput = struct(n0, _LARTI, 0, [_nT, _mR], [0, 1]);
export var ListApprovalRuleTemplatesOutput = struct(n0, _LARTO, 0, [_aRTNp, _nT], [64 | 0, 0]);
export var ListAssociatedApprovalRuleTemplatesForRepositoryInput = struct(n0, _LAARTFRI, 0, [_rN, _nT, _mR], [0, 0, 1]);
export var ListAssociatedApprovalRuleTemplatesForRepositoryOutput = struct(
  n0,
  _LAARTFRO,
  0,
  [_aRTNp, _nT],
  [64 | 0, 0]
);
export var ListPullRequestsInput = struct(n0, _LPRI, 0, [_rN, _aA, _pRS, _nT, _mR], [0, 0, 0, 0, 1]);
export var ListPullRequestsOutput = struct(n0, _LPRO, 0, [_pRIu, _nT], [64 | 0, 0]);
export var MergeHunk = struct(
  n0,
  _MH,
  0,
  [_iC, _so, _des, _b],
  [2, () => MergeHunkDetail, () => MergeHunkDetail, () => MergeHunkDetail]
);
export var MergeHunkDetail = struct(n0, _MHD, 0, [_sLt, _eL, _hC], [1, 1, 0]);
export var MergeOperations = struct(n0, _MO, 0, [_so, _des], [0, 0]);
export var ObjectTypes = struct(n0, _OT, 0, [_so, _des, _b], [0, 0, 0]);
export var PullRequestCreatedEventMetadata = struct(n0, _PRCEM, 0, [_rN, _sCI, _dCI, _mBe], [0, 0, 0, 0]);
export var PullRequestEvent = struct(
  n0,
  _PREu,
  0,
  [_pRI, _eD, _pRET, _aAc, _pRCEM, _pRSCEM, _pRSRUEM, _pRMSCEM, _aREM, _aSCEM, _aROEM],
  [
    0,
    4,
    0,
    0,
    () => PullRequestCreatedEventMetadata,
    () => PullRequestStatusChangedEventMetadata,
    () => PullRequestSourceReferenceUpdatedEventMetadata,
    () => PullRequestMergedStateChangedEventMetadata,
    () => ApprovalRuleEventMetadata,
    () => ApprovalStateChangedEventMetadata,
    () => ApprovalRuleOverriddenEventMetadata,
  ]
);
export var PullRequestMergedStateChangedEventMetadata = struct(
  n0,
  _PRMSCEM,
  0,
  [_rN, _dR, _mM],
  [0, 0, () => MergeMetadata]
);
export var PullRequestSourceReferenceUpdatedEventMetadata = struct(
  n0,
  _PRSRUEM,
  0,
  [_rN, _bCIe, _aCI, _mBe],
  [0, 0, 0, 0]
);
export var PullRequestStatusChangedEventMetadata = struct(n0, _PRSCEM, 0, [_pRS], [0]);
export var ReactionForComment = struct(n0, _RFC, 0, [_re, _rU, _rFDUC], [() => ReactionValueFormats, 64 | 0, 1]);
export var ReactionValueFormats = struct(n0, _RVF, 0, [_emo, _sCh, _u], [0, 0, 0]);
export var ApprovalRuleTemplateNameList = 64 | 0;

export var BatchDescribeMergeConflictsErrors = list(n0, _BDMCEa, 0, () => BatchDescribeMergeConflictsError);
export var Comments = list(n0, _Com, 0, () => Comment);
export var CommentsForComparedCommitData = list(n0, _CFCCD, 0, () => CommentsForComparedCommit);
export var CommentsForPullRequestData = list(n0, _CFPRD, 0, () => CommentsForPullRequest);
export var ConflictMetadataList = list(n0, _CML, 0, () => ConflictMetadata);
export var Conflicts = list(n0, _Conf, 0, () => Conflict);
export var FilePaths = 64 | 0;

export var MergeHunks = list(n0, _MHe, 0, () => MergeHunk);
export var PullRequestEventList = list(n0, _PREL, 0, () => PullRequestEvent);
export var PullRequestIdList = 64 | 0;

export var ReactionsForCommentList = list(n0, _RFCL, 0, () => ReactionForComment);
export var ReactionUsersList = 64 | 0;

export var BatchDescribeMergeConflicts = op(
  n0,
  _BDMC,
  0,
  () => BatchDescribeMergeConflictsInput,
  () => BatchDescribeMergeConflictsOutput
);
export var DescribeMergeConflicts = op(
  n0,
  _DMC,
  0,
  () => DescribeMergeConflictsInput,
  () => DescribeMergeConflictsOutput
);
export var DescribePullRequestEvents = op(
  n0,
  _DPRE,
  0,
  () => DescribePullRequestEventsInput,
  () => DescribePullRequestEventsOutput
);
export var GetCommentReactions = op(
  n0,
  _GCR,
  0,
  () => GetCommentReactionsInput,
  () => GetCommentReactionsOutput
);
export var GetCommentsForComparedCommit = op(
  n0,
  _GCFCC,
  0,
  () => GetCommentsForComparedCommitInput,
  () => GetCommentsForComparedCommitOutput
);
export var GetCommentsForPullRequest = op(
  n0,
  _GCFPR,
  0,
  () => GetCommentsForPullRequestInput,
  () => GetCommentsForPullRequestOutput
);
export var GetMergeConflicts = op(
  n0,
  _GMCe,
  0,
  () => GetMergeConflictsInput,
  () => GetMergeConflictsOutput
);
export var ListApprovalRuleTemplates = op(
  n0,
  _LART,
  0,
  () => ListApprovalRuleTemplatesInput,
  () => ListApprovalRuleTemplatesOutput
);
export var ListAssociatedApprovalRuleTemplatesForRepository = op(
  n0,
  _LAARTFR,
  0,
  () => ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  () => ListAssociatedApprovalRuleTemplatesForRepositoryOutput
);
export var ListPullRequests = op(
  n0,
  _LPR,
  0,
  () => ListPullRequestsInput,
  () => ListPullRequestsOutput
);
