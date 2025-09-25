// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ApprovalRuleContentRequiredException as __ApprovalRuleContentRequiredException,
  ApprovalRuleDoesNotExistException as __ApprovalRuleDoesNotExistException,
  ApprovalRuleNameAlreadyExistsException as __ApprovalRuleNameAlreadyExistsException,
  CannotModifyApprovalRuleFromTemplateException as __CannotModifyApprovalRuleFromTemplateException,
  InvalidApprovalRuleContentException as __InvalidApprovalRuleContentException,
  InvalidDescriptionException as __InvalidDescriptionException,
  InvalidPullRequestStatusUpdateException as __InvalidPullRequestStatusUpdateException,
  InvalidReferenceNameException as __InvalidReferenceNameException,
  InvalidTargetException as __InvalidTargetException,
  InvalidTargetsException as __InvalidTargetsException,
  InvalidTitleException as __InvalidTitleException,
  MaximumOpenPullRequestsExceededException as __MaximumOpenPullRequestsExceededException,
  MultipleRepositoriesInPullRequestException as __MultipleRepositoriesInPullRequestException,
  NumberOfRulesExceededException as __NumberOfRulesExceededException,
  PullRequestApprovalRulesNotSatisfiedException as __PullRequestApprovalRulesNotSatisfiedException,
  PullRequestStatusRequiredException as __PullRequestStatusRequiredException,
  ReferenceDoesNotExistException as __ReferenceDoesNotExistException,
  ReferenceNameRequiredException as __ReferenceNameRequiredException,
  ReferenceTypeNotSupportedException as __ReferenceTypeNotSupportedException,
  SourceAndDestinationAreSameException as __SourceAndDestinationAreSameException,
  TargetRequiredException as __TargetRequiredException,
  TargetsRequiredException as __TargetsRequiredException,
  TipOfSourceReferenceIsDifferentException as __TipOfSourceReferenceIsDifferentException,
  TitleRequiredException as __TitleRequiredException,
} from "../models/index";
import {
  _aA,
  _aN,
  _AR,
  _aR,
  _aRC,
  _ARCRE,
  _ARDNEE,
  _aRI,
  _ARL,
  _aRN,
  _ARNAEE,
  _aRp,
  _aRTI,
  _aRTN,
  _c,
  _cD,
  _cDL,
  _CMARFTE,
  _cMo,
  _CPR,
  _CPRAR,
  _CPRARI,
  _CPRARO,
  _CPRI,
  _CPRO,
  _cRo,
  _cRS,
  _cRT,
  _dC,
  _de,
  _dR,
  _e,
  _em,
  _eRCS,
  _GPR,
  _GPRI,
  _GPRO,
  _IARCE,
  _IDE,
  _iM,
  _IPRSUE,
  _IRNE,
  _ITE,
  _ITEn,
  _ITEnv,
  _kEF,
  _lAD,
  _lMD,
  _lMU,
  _m,
  _mB,
  _mBe,
  _mCIe,
  _MM,
  _mM,
  _mO,
  _MOPREE,
  _MPRBFF,
  _MPRBFFI,
  _MPRBFFO,
  _MPRBS,
  _MPRBSI,
  _MPRBSO,
  _MPRBTW,
  _MPRBTWI,
  _MPRBTWO,
  _MRIPRE,
  _NOREE,
  _nRC,
  _OART,
  _oART,
  _PR,
  _pR,
  _PRARNSE,
  _pRI,
  _pRS,
  _PRSRE,
  _PRT,
  _pRT,
  _PRTL,
  _rCS,
  _RDNEE,
  _rI,
  _rN,
  _RNRE,
  _RTNSE,
  _SADASE,
  _sC,
  _sCI,
  _sR,
  _T,
  _t,
  _ta,
  _TL,
  _TOSRIDE,
  _TRE,
  _TREa,
  _TREi,
  _UPRARC,
  _UPRARCI,
  _UPRARCO,
  _UPRD,
  _UPRDI,
  _UPRDO,
  _UPRS,
  _UPRSI,
  _UPRSO,
  _UPRT,
  _UPRTI,
  _UPRTO,
  n0,
} from "./schemas_0";
import { ConflictResolution } from "./schemas_15_Merge";

/* eslint no-var: 0 */

export var ApprovalRule = struct(
  n0,
  _AR,
  0,
  [_aRI, _aRN, _aRC, _rCS, _lMD, _cD, _lMU, _oART],
  [0, 0, 0, 0, 4, 4, 0, () => OriginApprovalRuleTemplate]
);
export var ApprovalRuleContentRequiredException = error(
  n0,
  _ARCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleContentRequiredException
);
export var ApprovalRuleDoesNotExistException = error(
  n0,
  _ARDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleDoesNotExistException
);
export var ApprovalRuleNameAlreadyExistsException = error(
  n0,
  _ARNAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleNameAlreadyExistsException
);
export var CannotModifyApprovalRuleFromTemplateException = error(
  n0,
  _CMARFTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CannotModifyApprovalRuleFromTemplateException
);
export var CreatePullRequestApprovalRuleInput = struct(n0, _CPRARI, 0, [_pRI, _aRN, _aRC], [0, 0, 0]);
export var CreatePullRequestApprovalRuleOutput = struct(n0, _CPRARO, 0, [_aR], [() => ApprovalRule]);
export var CreatePullRequestInput = struct(n0, _CPRI, 0, [_t, _de, _ta, _cRT], [0, 0, () => TargetList, [0, 4]]);
export var CreatePullRequestOutput = struct(n0, _CPRO, 0, [_pR], [() => PullRequest]);
export var GetPullRequestInput = struct(n0, _GPRI, 0, [_pRI], [0]);
export var GetPullRequestOutput = struct(n0, _GPRO, 0, [_pR], [() => PullRequest]);
export var InvalidApprovalRuleContentException = error(
  n0,
  _IARCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalRuleContentException
);
export var InvalidDescriptionException = error(
  n0,
  _IDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidDescriptionException
);
export var InvalidPullRequestStatusUpdateException = error(
  n0,
  _IPRSUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidPullRequestStatusUpdateException
);
export var InvalidReferenceNameException = error(
  n0,
  _IRNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidReferenceNameException
);
export var InvalidTargetException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTargetException
);
export var InvalidTargetsException = error(
  n0,
  _ITEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTargetsException
);
export var InvalidTitleException = error(
  n0,
  _ITEnv,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTitleException
);
export var MaximumOpenPullRequestsExceededException = error(
  n0,
  _MOPREE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumOpenPullRequestsExceededException
);
export var MergeMetadata = struct(n0, _MM, 0, [_iM, _mB, _mCIe, _mO], [2, 0, 0, 0]);
export var MergePullRequestByFastForwardInput = struct(n0, _MPRBFFI, 0, [_pRI, _rN, _sCI], [0, 0, 0]);
export var MergePullRequestByFastForwardOutput = struct(n0, _MPRBFFO, 0, [_pR], [() => PullRequest]);
export var MergePullRequestBySquashInput = struct(
  n0,
  _MPRBSI,
  0,
  [_pRI, _rN, _sCI, _cDL, _cRS, _cMo, _aN, _em, _kEF, _cRo],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, () => ConflictResolution]
);
export var MergePullRequestBySquashOutput = struct(n0, _MPRBSO, 0, [_pR], [() => PullRequest]);
export var MergePullRequestByThreeWayInput = struct(
  n0,
  _MPRBTWI,
  0,
  [_pRI, _rN, _sCI, _cDL, _cRS, _cMo, _aN, _em, _kEF, _cRo],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, () => ConflictResolution]
);
export var MergePullRequestByThreeWayOutput = struct(n0, _MPRBTWO, 0, [_pR], [() => PullRequest]);
export var MultipleRepositoriesInPullRequestException = error(
  n0,
  _MRIPRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MultipleRepositoriesInPullRequestException
);
export var NumberOfRulesExceededException = error(
  n0,
  _NOREE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NumberOfRulesExceededException
);
export var OriginApprovalRuleTemplate = struct(n0, _OART, 0, [_aRTI, _aRTN], [0, 0]);
export var PullRequest = struct(
  n0,
  _PR,
  0,
  [_pRI, _t, _de, _lAD, _cD, _pRS, _aA, _pRT, _cRT, _rI, _aRp],
  [0, 0, 0, 4, 4, 0, 0, () => PullRequestTargetList, 0, 0, () => ApprovalRulesList]
);
export var PullRequestApprovalRulesNotSatisfiedException = error(
  n0,
  _PRARNSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PullRequestApprovalRulesNotSatisfiedException
);
export var PullRequestStatusRequiredException = error(
  n0,
  _PRSRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PullRequestStatusRequiredException
);
export var PullRequestTarget = struct(
  n0,
  _PRT,
  0,
  [_rN, _sR, _dR, _dC, _sC, _mBe, _mM],
  [0, 0, 0, 0, 0, 0, () => MergeMetadata]
);
export var ReferenceDoesNotExistException = error(
  n0,
  _RDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReferenceDoesNotExistException
);
export var ReferenceNameRequiredException = error(
  n0,
  _RNRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReferenceNameRequiredException
);
export var ReferenceTypeNotSupportedException = error(
  n0,
  _RTNSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReferenceTypeNotSupportedException
);
export var SourceAndDestinationAreSameException = error(
  n0,
  _SADASE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SourceAndDestinationAreSameException
);
export var Target = struct(n0, _T, 0, [_rN, _sR, _dR], [0, 0, 0]);
export var TargetRequiredException = error(
  n0,
  _TRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TargetRequiredException
);
export var TargetsRequiredException = error(
  n0,
  _TREa,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TargetsRequiredException
);
export var TipOfSourceReferenceIsDifferentException = error(
  n0,
  _TOSRIDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TipOfSourceReferenceIsDifferentException
);
export var TitleRequiredException = error(
  n0,
  _TREi,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TitleRequiredException
);
export var UpdatePullRequestApprovalRuleContentInput = struct(n0, _UPRARCI, 0, [_pRI, _aRN, _eRCS, _nRC], [0, 0, 0, 0]);
export var UpdatePullRequestApprovalRuleContentOutput = struct(n0, _UPRARCO, 0, [_aR], [() => ApprovalRule]);
export var UpdatePullRequestDescriptionInput = struct(n0, _UPRDI, 0, [_pRI, _de], [0, 0]);
export var UpdatePullRequestDescriptionOutput = struct(n0, _UPRDO, 0, [_pR], [() => PullRequest]);
export var UpdatePullRequestStatusInput = struct(n0, _UPRSI, 0, [_pRI, _pRS], [0, 0]);
export var UpdatePullRequestStatusOutput = struct(n0, _UPRSO, 0, [_pR], [() => PullRequest]);
export var UpdatePullRequestTitleInput = struct(n0, _UPRTI, 0, [_pRI, _t], [0, 0]);
export var UpdatePullRequestTitleOutput = struct(n0, _UPRTO, 0, [_pR], [() => PullRequest]);
export var ApprovalRulesList = list(n0, _ARL, 0, () => ApprovalRule);
export var PullRequestTargetList = list(n0, _PRTL, 0, () => PullRequestTarget);
export var TargetList = list(n0, _TL, 0, () => Target);
export var CreatePullRequest = op(
  n0,
  _CPR,
  0,
  () => CreatePullRequestInput,
  () => CreatePullRequestOutput
);
export var CreatePullRequestApprovalRule = op(
  n0,
  _CPRAR,
  0,
  () => CreatePullRequestApprovalRuleInput,
  () => CreatePullRequestApprovalRuleOutput
);
export var GetPullRequest = op(
  n0,
  _GPR,
  0,
  () => GetPullRequestInput,
  () => GetPullRequestOutput
);
export var MergePullRequestByFastForward = op(
  n0,
  _MPRBFF,
  0,
  () => MergePullRequestByFastForwardInput,
  () => MergePullRequestByFastForwardOutput
);
export var MergePullRequestBySquash = op(
  n0,
  _MPRBS,
  0,
  () => MergePullRequestBySquashInput,
  () => MergePullRequestBySquashOutput
);
export var MergePullRequestByThreeWay = op(
  n0,
  _MPRBTW,
  0,
  () => MergePullRequestByThreeWayInput,
  () => MergePullRequestByThreeWayOutput
);
export var UpdatePullRequestApprovalRuleContent = op(
  n0,
  _UPRARC,
  0,
  () => UpdatePullRequestApprovalRuleContentInput,
  () => UpdatePullRequestApprovalRuleContentOutput
);
export var UpdatePullRequestDescription = op(
  n0,
  _UPRD,
  0,
  () => UpdatePullRequestDescriptionInput,
  () => UpdatePullRequestDescriptionOutput
);
export var UpdatePullRequestStatus = op(
  n0,
  _UPRS,
  0,
  () => UpdatePullRequestStatusInput,
  () => UpdatePullRequestStatusOutput
);
export var UpdatePullRequestTitle = op(
  n0,
  _UPRT,
  0,
  () => UpdatePullRequestTitleInput,
  () => UpdatePullRequestTitleOutput
);
