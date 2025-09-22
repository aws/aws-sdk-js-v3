// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidActionDeclarationException as __InvalidActionDeclarationException,
  InvalidBlockerDeclarationException as __InvalidBlockerDeclarationException,
  InvalidJobException as __InvalidJobException,
  InvalidStageDeclarationException as __InvalidStageDeclarationException,
  InvalidStructureException as __InvalidStructureException,
  PipelineNameInUseException as __PipelineNameInUseException,
  PipelineVersionNotFoundException as __PipelineVersionNotFoundException,
  RequestFailedException as __RequestFailedException,
} from "../models/index";
import {
  _A,
  _aA,
  _AC,
  _aC,
  _ac,
  _ACc,
  _ACP,
  _aCP,
  _ACPL,
  _aCr,
  _act,
  _AD,
  _AED,
  _aED,
  _AEDL,
  _AEF,
  _AEI,
  _aEI,
  _AEO,
  _AER,
  _aI,
  _AKI,
  _aKI,
  _AL,
  _ALr,
  _aN,
  _aOF,
  _aS,
  _ASM,
  _ASr,
  _aSr,
  _AT,
  _aT,
  _ATAD,
  _aTc,
  _ATD,
  _ATE,
  _aTI,
  _ATIc,
  _ATL,
  _ATP,
  _ATPc,
  _ATPct,
  _ATS,
  _ATU,
  _AWSSC,
  _b,
  _BD,
  _bE,
  _BEC,
  _bl,
  _bN,
  _C,
  _c,
  _ca,
  _CCAT,
  _CCATI,
  _CCATO,
  _CL,
  _cl,
  _co,
  _con,
  _CP,
  _cP,
  _CPI,
  _CPO,
  _cr,
  _cT,
  _cTo,
  _cU,
  _d,
  _da,
  _dV,
  _e,
  _EC,
  _eD,
  _eEI,
  _eES,
  _eEU,
  _EK,
  _eK,
  _eMx,
  _eR,
  _eUT,
  _eUTx,
  _EV,
  _eV,
  _ev,
  _EVL,
  _ex,
  _exc,
  _f,
  _FC,
  _fil,
  _fP,
  _GAT,
  _GATI,
  _GATO,
  _GBFC,
  _GC,
  _gC,
  _GFPFC,
  _GJD,
  _GJDI,
  _GJDO,
  _GP,
  _GPF,
  _GPFL,
  _GPI,
  _GPO,
  _GPRF,
  _GPRFL,
  _GTFC,
  _GTPJD,
  _GTPJDI,
  _GTPJDO,
  _i,
  _IA,
  _iA,
  _iAD,
  _IADE,
  _IAL,
  _IBDE,
  _id,
  _IJE,
  _in,
  _ISDE,
  _ISE,
  _J,
  _j,
  _JD,
  _jD,
  _JDo,
  _jI,
  _JL,
  _jT,
  _JWEC,
  _jWEC,
  _k,
  _l,
  _LAE,
  _LAEI,
  _LAEO,
  _LAT,
  _LATI,
  _LATO,
  _LEC,
  _lEC,
  _lFA,
  _lIPE,
  _lSARN,
  _lUT,
  _m,
  _mBS,
  _mC,
  _mCa,
  _me,
  _mR,
  _n,
  _na,
  _nam,
  _nE,
  _nT,
  _o,
  _OA,
  _oA,
  _oAD,
  _OAL,
  _oF,
  _oK,
  _op,
  _oS,
  _oV,
  _ow,
  _p,
  _pA,
  _pAi,
  _PC,
  _pCi,
  _PD,
  _pDA,
  _pEI,
  _PFJ,
  _PFJI,
  _PFJO,
  _pi,
  _PM,
  _pN,
  _PNIUE,
  _pR,
  _pr,
  _pro,
  _PSDL,
  _pSP,
  _pST,
  _pT,
  _PTD,
  _PTDL,
  _pTr,
  _pu,
  _pV,
  _PVD,
  _PVDL,
  _PVNFE,
  _q,
  _qP,
  _r,
  _rA,
  _RC,
  _rC,
  _rCe,
  _RD,
  _RDL,
  _re,
  _res,
  _rev,
  _rF,
  _RFE,
  _rMe,
  _rO,
  _rTI,
  _ru,
  _rUT,
  _s,
  _SADL,
  _SAK,
  _sAK,
  _SAL,
  _sAN,
  _SBDL,
  _SC,
  _SCu,
  _SD,
  _se,
  _set,
  _sL,
  _sN,
  _ST,
  _sT,
  _st,
  _sta,
  _sTe,
  _t,
  _ta,
  _tIM,
  _tPCU,
  _TPJD,
  _TPJDh,
  _tr,
  _u,
  _UAT,
  _UATI,
  _uB,
  _UP,
  _up,
  _UPI,
  _UPO,
  _v,
  _va,
  _var,
  n0,
  Unit,
} from "./schemas_0";
import { ArtifactDetailList, ArtifactDetails, ErrorDetails, LatestInPipelineExecutionFilter } from "./schemas_5_Action";
import { ActionTypeId } from "./schemas_9_Action";
import { TagList } from "./schemas_14_Resource";
import { RuleTypeId } from "./schemas_24_List";

/* eslint no-var: 0 */

export var AccessKeyId = sim(n0, _AKI, 0, 8);
export var SecretAccessKey = sim(n0, _SAK, 0, 8);
export var SessionToken = sim(n0, _ST, 0, 8);
export var ActionConfiguration = struct(n0, _AC, 0, [_c], [128 | 0]);
export var ActionConfigurationProperty = struct(n0, _ACP, 0, [_na, _r, _k, _se, _q, _d, _t], [0, 2, 2, 2, 2, 0, 0]);
export var ActionContext = struct(n0, _ACc, 0, [_na, _aEI], [0, 0]);
export var ActionDeclaration = struct(
  n0,
  _AD,
  0,
  [_na, _aTI, _rO, _c, _co, _oA, _iA, _oV, _rA, _re, _nam, _tIM, _eV],
  [
    0,
    () => ActionTypeId,
    1,
    128 | 0,
    64 | 0,
    () => OutputArtifactList,
    () => InputArtifactList,
    64 | 0,
    0,
    0,
    0,
    1,
    () => EnvironmentVariableList,
  ]
);
export var ActionExecutionDetail = struct(
  n0,
  _AED,
  0,
  [_pEI, _aEI, _pV, _sN, _aN, _sT, _lUT, _uB, _s, _i, _o],
  [0, 0, 1, 0, 0, 4, 4, 0, 0, () => ActionExecutionInput, () => ActionExecutionOutput]
);
export var ActionExecutionFilter = struct(n0, _AEF, 0, [_pEI, _lIPE], [0, () => LatestInPipelineExecutionFilter]);
export var ActionExecutionInput = struct(
  n0,
  _AEI,
  0,
  [_aTI, _c, _rC, _rA, _re, _iA, _nam],
  [() => ActionTypeId, 128 | 0, 128 | 0, 0, 0, () => ArtifactDetailList, 0]
);
export var ActionExecutionOutput = struct(
  n0,
  _AEO,
  0,
  [_oA, _eR, _oV],
  [() => ArtifactDetailList, () => ActionExecutionResult, 128 | 0]
);
export var ActionExecutionResult = struct(
  n0,
  _AER,
  0,
  [_eEI, _eES, _eEU, _eD, _lSARN],
  [0, 0, 0, () => ErrorDetails, 0]
);
export var ActionType = struct(
  n0,
  _AT,
  0,
  [_id, _set, _aCP, _iAD, _oAD],
  [
    () => ActionTypeId,
    () => ActionTypeSettings,
    () => ActionConfigurationPropertyList,
    () => ArtifactDetails,
    () => ArtifactDetails,
  ]
);
export var ActionTypeArtifactDetails = struct(n0, _ATAD, 0, [_mC, _mCa], [1, 1]);
export var ActionTypeDeclaration = struct(
  n0,
  _ATD,
  0,
  [_d, _ex, _id, _iAD, _oAD, _p, _pr, _u],
  [
    0,
    () => ActionTypeExecutor,
    () => ActionTypeIdentifier,
    () => ActionTypeArtifactDetails,
    () => ActionTypeArtifactDetails,
    () => ActionTypePermissions,
    () => ActionTypeProperties,
    () => ActionTypeUrls,
  ]
);
export var ActionTypeExecutor = struct(n0, _ATE, 0, [_c, _t, _pST, _jT], [() => ExecutorConfiguration, 0, 0, 1]);
export var ActionTypeIdentifier = struct(n0, _ATIc, 0, [_ca, _ow, _pro, _v], [0, 0, 0, 0]);
export var ActionTypePermissions = struct(n0, _ATP, 0, [_aA], [64 | 0]);
export var ActionTypeProperty = struct(n0, _ATPc, 0, [_na, _op, _k, _nE, _q, _d], [0, 2, 2, 2, 2, 0]);
export var ActionTypeSettings = struct(n0, _ATS, 0, [_tPCU, _eUT, _eUTx, _rUT], [0, 0, 0, 0]);
export var ActionTypeUrls = struct(n0, _ATU, 0, [_cU, _eUT, _eUTx, _rUT], [0, 0, 0, 0]);
export var Artifact = struct(n0, _A, 0, [_na, _rev, _l], [0, 0, () => ArtifactLocation]);
export var ArtifactLocation = struct(n0, _AL, 0, [_t, _sL], [0, () => S3ArtifactLocation]);
export var ArtifactStore = struct(n0, _ASr, 0, [_t, _l, _eK], [0, 0, () => EncryptionKey]);
export var AWSSessionCredentials = struct(
  n0,
  _AWSSC,
  8,
  [_aKI, _sAK, _sTe],
  [
    [() => AccessKeyId, 0],
    [() => SecretAccessKey, 0],
    [() => SessionToken, 0],
  ]
);
export var BeforeEntryConditions = struct(n0, _BEC, 0, [_con], [() => ConditionList]);
export var BlockerDeclaration = struct(n0, _BD, 0, [_na, _t], [0, 0]);
export var Condition = struct(n0, _C, 0, [_res, _ru], [0, () => RuleDeclarationList]);
export var CreateCustomActionTypeInput = struct(
  n0,
  _CCATI,
  0,
  [_ca, _pro, _v, _set, _cP, _iAD, _oAD, _ta],
  [
    0,
    0,
    0,
    () => ActionTypeSettings,
    () => ActionConfigurationPropertyList,
    () => ArtifactDetails,
    () => ArtifactDetails,
    () => TagList,
  ]
);
export var CreateCustomActionTypeOutput = struct(n0, _CCATO, 0, [_aT, _ta], [() => ActionType, () => TagList]);
export var CreatePipelineInput = struct(n0, _CPI, 0, [_pi, _ta], [() => PipelineDeclaration, () => TagList]);
export var CreatePipelineOutput = struct(n0, _CPO, 0, [_pi, _ta], [() => PipelineDeclaration, () => TagList]);
export var EncryptionKey = struct(n0, _EK, 0, [_id, _t], [0, 0]);
export var EnvironmentVariable = struct(n0, _EV, 0, [_na, _va, _t], [0, 0, 0]);
export var ExecutorConfiguration = struct(
  n0,
  _EC,
  0,
  [_lEC, _jWEC],
  [() => LambdaExecutorConfiguration, () => JobWorkerExecutorConfiguration]
);
export var FailureConditions = struct(
  n0,
  _FC,
  0,
  [_res, _rCe, _con],
  [0, () => RetryConfiguration, () => ConditionList]
);
export var GetActionTypeInput = struct(n0, _GATI, 0, [_ca, _ow, _pro, _v], [0, 0, 0, 0]);
export var GetActionTypeOutput = struct(n0, _GATO, 0, [_aT], [() => ActionTypeDeclaration]);
export var GetJobDetailsInput = struct(n0, _GJDI, 0, [_jI], [0]);
export var GetJobDetailsOutput = struct(n0, _GJDO, 0, [_jD], [[() => JobDetails, 0]]);
export var GetPipelineInput = struct(n0, _GPI, 0, [_na, _v], [0, 1]);
export var GetPipelineOutput = struct(n0, _GPO, 0, [_pi, _me], [() => PipelineDeclaration, () => PipelineMetadata]);
export var GetThirdPartyJobDetailsInput = struct(n0, _GTPJDI, 0, [_jI, _cT], [0, 0]);
export var GetThirdPartyJobDetailsOutput = struct(n0, _GTPJDO, 0, [_jD], [[() => ThirdPartyJobDetails, 0]]);
export var GitBranchFilterCriteria = struct(n0, _GBFC, 0, [_in, _exc], [64 | 0, 64 | 0]);
export var GitConfiguration = struct(
  n0,
  _GC,
  0,
  [_sAN, _pu, _pR],
  [0, () => GitPushFilterList, () => GitPullRequestFilterList]
);
export var GitFilePathFilterCriteria = struct(n0, _GFPFC, 0, [_in, _exc], [64 | 0, 64 | 0]);
export var GitPullRequestFilter = struct(
  n0,
  _GPRF,
  0,
  [_ev, _b, _fP],
  [64 | 0, () => GitBranchFilterCriteria, () => GitFilePathFilterCriteria]
);
export var GitPushFilter = struct(
  n0,
  _GPF,
  0,
  [_ta, _b, _fP],
  [() => GitTagFilterCriteria, () => GitBranchFilterCriteria, () => GitFilePathFilterCriteria]
);
export var GitTagFilterCriteria = struct(n0, _GTFC, 0, [_in, _exc], [64 | 0, 64 | 0]);
export var InputArtifact = struct(n0, _IA, 0, [_na], [0]);
export var InvalidActionDeclarationException = error(
  n0,
  _IADE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidActionDeclarationException
);
export var InvalidBlockerDeclarationException = error(
  n0,
  _IBDE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidBlockerDeclarationException
);
export var InvalidJobException = error(
  n0,
  _IJE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidJobException
);
export var InvalidStageDeclarationException = error(
  n0,
  _ISDE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidStageDeclarationException
);
export var InvalidStructureException = error(
  n0,
  _ISE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidStructureException
);
export var Job = struct(n0, _J, 0, [_id, _da, _n, _aI], [0, [() => JobData, 0], 0, 0]);
export var JobData = struct(
  n0,
  _JD,
  0,
  [_aTI, _aC, _pCi, _iA, _oA, _aCr, _cTo, _eK],
  [
    () => ActionTypeId,
    () => ActionConfiguration,
    () => PipelineContext,
    () => ArtifactList,
    () => ArtifactList,
    [() => AWSSessionCredentials, 0],
    0,
    () => EncryptionKey,
  ]
);
export var JobDetails = struct(n0, _JDo, 0, [_id, _da, _aI], [0, [() => JobData, 0], 0]);
export var JobWorkerExecutorConfiguration = struct(n0, _JWEC, 0, [_pA, _pSP], [64 | 0, 64 | 0]);
export var LambdaExecutorConfiguration = struct(n0, _LEC, 0, [_lFA], [0]);
export var ListActionExecutionsInput = struct(
  n0,
  _LAEI,
  0,
  [_pN, _f, _mR, _nT],
  [0, () => ActionExecutionFilter, 1, 0]
);
export var ListActionExecutionsOutput = struct(n0, _LAEO, 0, [_aED, _nT], [() => ActionExecutionDetailList, 0]);
export var ListActionTypesInput = struct(n0, _LATI, 0, [_aOF, _nT, _rF], [0, 0, 0]);
export var ListActionTypesOutput = struct(n0, _LATO, 0, [_aTc, _nT], [() => ActionTypeList, 0]);
export var OutputArtifact = struct(n0, _OA, 0, [_na, _fil], [0, 64 | 0]);
export var PipelineContext = struct(
  n0,
  _PC,
  0,
  [_pN, _st, _ac, _pAi, _pEI],
  [0, () => StageContext, () => ActionContext, 0, 0]
);
export var PipelineDeclaration = struct(
  n0,
  _PD,
  0,
  [_na, _rA, _aS, _aSr, _sta, _v, _eMx, _pT, _var, _tr],
  [
    0,
    0,
    () => ArtifactStore,
    () => ArtifactStoreMap,
    () => PipelineStageDeclarationList,
    1,
    0,
    0,
    () => PipelineVariableDeclarationList,
    () => PipelineTriggerDeclarationList,
  ]
);
export var PipelineMetadata = struct(n0, _PM, 0, [_pAi, _cr, _up, _pDA], [0, 4, 4, 4]);
export var PipelineNameInUseException = error(
  n0,
  _PNIUE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __PipelineNameInUseException
);
export var PipelineTriggerDeclaration = struct(n0, _PTD, 0, [_pTr, _gC], [0, () => GitConfiguration]);
export var PipelineVariableDeclaration = struct(n0, _PVD, 0, [_na, _dV, _d], [0, 0, 0]);
export var PipelineVersionNotFoundException = error(
  n0,
  _PVNFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __PipelineVersionNotFoundException
);
export var PollForJobsInput = struct(n0, _PFJI, 0, [_aTI, _mBS, _qP], [() => ActionTypeId, 1, 128 | 0]);
export var PollForJobsOutput = struct(n0, _PFJO, 0, [_j], [[() => JobList, 0]]);
export var RequestFailedException = error(
  n0,
  _RFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __RequestFailedException
);
export var RetryConfiguration = struct(n0, _RC, 0, [_rMe], [0]);
export var RuleDeclaration = struct(
  n0,
  _RD,
  0,
  [_na, _rTI, _c, _co, _iA, _rA, _re, _tIM],
  [0, () => RuleTypeId, 128 | 0, 64 | 0, () => InputArtifactList, 0, 0, 1]
);
export var S3ArtifactLocation = struct(n0, _SAL, 0, [_bN, _oK], [0, 0]);
export var StageContext = struct(n0, _SC, 0, [_na], [0]);
export var StageDeclaration = struct(
  n0,
  _SD,
  0,
  [_na, _bl, _act, _oF, _oS, _bE],
  [
    0,
    () => StageBlockerDeclarationList,
    () => StageActionDeclarationList,
    () => FailureConditions,
    () => SuccessConditions,
    () => BeforeEntryConditions,
  ]
);
export var SuccessConditions = struct(n0, _SCu, 0, [_con], [() => ConditionList]);
export var ThirdPartyJobData = struct(
  n0,
  _TPJD,
  0,
  [_aTI, _aC, _pCi, _iA, _oA, _aCr, _cTo, _eK],
  [
    () => ActionTypeId,
    () => ActionConfiguration,
    () => PipelineContext,
    () => ArtifactList,
    () => ArtifactList,
    [() => AWSSessionCredentials, 0],
    0,
    () => EncryptionKey,
  ]
);
export var ThirdPartyJobDetails = struct(n0, _TPJDh, 0, [_id, _da, _n], [0, [() => ThirdPartyJobData, 0], 0]);
export var UpdateActionTypeInput = struct(n0, _UATI, 0, [_aT], [() => ActionTypeDeclaration]);
export var UpdatePipelineInput = struct(n0, _UPI, 0, [_pi], [() => PipelineDeclaration]);
export var UpdatePipelineOutput = struct(n0, _UPO, 0, [_pi], [() => PipelineDeclaration]);
export var ActionConfigurationPropertyList = list(n0, _ACPL, 0, () => ActionConfigurationProperty);
export var ActionExecutionDetailList = list(n0, _AEDL, 0, () => ActionExecutionDetail);
export var ActionTypeList = list(n0, _ATL, 0, () => ActionType);
export var ActionTypeProperties = list(n0, _ATPct, 0, () => ActionTypeProperty);
export var AllowedAccounts = 64 | 0;

export var ArtifactList = list(n0, _ALr, 0, () => Artifact);
export var CommandList = 64 | 0;

export var ConditionList = list(n0, _CL, 0, () => Condition);
export var EnvironmentVariableList = list(n0, _EVL, 0, () => EnvironmentVariable);
export var FilePathList = 64 | 0;

export var GitBranchPatternList = 64 | 0;

export var GitFilePathPatternList = 64 | 0;

export var GitPullRequestEventTypeList = 64 | 0;

export var GitPullRequestFilterList = list(n0, _GPRFL, 0, () => GitPullRequestFilter);
export var GitPushFilterList = list(n0, _GPFL, 0, () => GitPushFilter);
export var GitTagPatternList = 64 | 0;

export var InputArtifactList = list(n0, _IAL, 0, () => InputArtifact);
export var JobList = list(n0, _JL, 0, [() => Job, 0]);
export var OutputArtifactList = list(n0, _OAL, 0, () => OutputArtifact);
export var OutputVariableList = 64 | 0;

export var PipelineStageDeclarationList = list(n0, _PSDL, 0, () => StageDeclaration);
export var PipelineTriggerDeclarationList = list(n0, _PTDL, 0, () => PipelineTriggerDeclaration);
export var PipelineVariableDeclarationList = list(n0, _PVDL, 0, () => PipelineVariableDeclaration);
export var PollingAccountList = 64 | 0;

export var PollingServicePrincipalList = 64 | 0;

export var RuleDeclarationList = list(n0, _RDL, 0, () => RuleDeclaration);
export var StageActionDeclarationList = list(n0, _SADL, 0, () => ActionDeclaration);
export var StageBlockerDeclarationList = list(n0, _SBDL, 0, () => BlockerDeclaration);
export var ActionConfigurationMap = 128 | 0;

export var ArtifactStoreMap = map(n0, _ASM, 0, 0, () => ArtifactStore);
export var QueryParamMap = 128 | 0;

export var ResolvedActionConfigurationMap = 128 | 0;

export var CreateCustomActionType = op(
  n0,
  _CCAT,
  0,
  () => CreateCustomActionTypeInput,
  () => CreateCustomActionTypeOutput
);
export var CreatePipeline = op(
  n0,
  _CP,
  0,
  () => CreatePipelineInput,
  () => CreatePipelineOutput
);
export var GetActionType = op(
  n0,
  _GAT,
  0,
  () => GetActionTypeInput,
  () => GetActionTypeOutput
);
export var GetJobDetails = op(
  n0,
  _GJD,
  0,
  () => GetJobDetailsInput,
  () => GetJobDetailsOutput
);
export var GetPipeline = op(
  n0,
  _GP,
  0,
  () => GetPipelineInput,
  () => GetPipelineOutput
);
export var GetThirdPartyJobDetails = op(
  n0,
  _GTPJD,
  0,
  () => GetThirdPartyJobDetailsInput,
  () => GetThirdPartyJobDetailsOutput
);
export var ListActionExecutions = op(
  n0,
  _LAE,
  0,
  () => ListActionExecutionsInput,
  () => ListActionExecutionsOutput
);
export var ListActionTypes = op(
  n0,
  _LAT,
  0,
  () => ListActionTypesInput,
  () => ListActionTypesOutput
);
export var PollForJobs = op(
  n0,
  _PFJ,
  0,
  () => PollForJobsInput,
  () => PollForJobsOutput
);
export var UpdateActionType = op(
  n0,
  _UAT,
  0,
  () => UpdateActionTypeInput,
  () => Unit
);
export var UpdatePipeline = op(
  n0,
  _UP,
  0,
  () => UpdatePipelineInput,
  () => UpdatePipelineOutput
);
