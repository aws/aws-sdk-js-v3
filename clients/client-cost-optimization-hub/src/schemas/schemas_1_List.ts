// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ADCS,
  _aDCS,
  _ADCSC,
  _ADE,
  _AES,
  _AESc,
  _aI,
  _aIc,
  _aS,
  _aSIG,
  _aSl,
  _aSt,
  _aT,
  _aTc,
  _BSPC,
  _c,
  _CC,
  _cC,
  _cCLPID,
  _cCu,
  _cG,
  _co,
  _com,
  _cRD,
  _cRS,
  _cRT,
  _CSP,
  _cSP,
  _CSPC,
  _cT,
  _cU,
  _d,
  _DDRC,
  _dDRC,
  _DDRCC,
  _dE,
  _dEa,
  _DIC,
  _dIC,
  _dO,
  _e,
  _EASG,
  _eASG,
  _EASGC,
  _eCAD,
  _eCBD,
  _ECRI,
  _eCRI,
  _ECRIC,
  _ED,
  _eD,
  _EI,
  _eI,
  _EIC,
  _EISP,
  _eISP,
  _EISPC,
  _eMARC,
  _eMC,
  _eMCs,
  _eMS,
  _eNUAC,
  _eODC,
  _ERI,
  _eRI,
  _ERIC,
  _ES,
  _eS,
  _ESC,
  _eSOCCLP,
  _eSP,
  _eTDS,
  _EV,
  _eV,
  _EVC,
  _F,
  _f,
  _fi,
  _fN,
  _g,
  _gB,
  _GP,
  _GPR,
  _GPRe,
  _GR,
  _GRR,
  _GRRe,
  _hC,
  _hE,
  _i,
  _iAR,
  _IC,
  _iE,
  _iEm,
  _iF,
  _iMA,
  _in,
  _iOI,
  _ISE,
  _iT,
  _it,
  _k,
  _LES,
  _LESR,
  _LESRi,
  _LF,
  _lF,
  _LFC,
  _lM,
  _LR,
  _LRR,
  _LRRi,
  _LRS,
  _LRSR,
  _LRSRi,
  _lRT,
  _lUT,
  _m,
  _mADV,
  _MDRI,
  _mDRI,
  _MDRIC,
  _me,
  _mI,
  _MIC,
  _MICL,
  _mR,
  _mRC,
  _mREC,
  _mSIMB,
  _mSPEC,
  _nOCUTP,
  _nOITP,
  _nT,
  _nUTP,
  _o,
  _OB,
  _oB,
  _oC,
  _oD,
  _op,
  _OSRI,
  _oSRI,
  _OSRIC,
  _p,
  _PC,
  _pC,
  _pCr,
  _pe,
  _pO,
  _pr,
  _R,
  _r,
  _rA,
  _rAe,
  _rC,
  _RCC,
  _RD,
  _RDI,
  _rDI,
  _RDIC,
  _RDIS,
  _rDIS,
  _RDISC,
  _re,
  _rea,
  _rI,
  _RICC,
  _rID,
  _rIe,
  _rIec,
  _rIes,
  _RIP,
  _rIR,
  _RL,
  _rLPID,
  _rN,
  _RNFE,
  _RP,
  _rP,
  _rRD,
  _RRI,
  _rRI,
  _RRIC,
  _RRICe,
  _RRIe,
  _rRIe,
  _rRS,
  _rRT,
  _RS,
  _RSL,
  _rT,
  _s,
  _SC,
  _se,
  _sEM,
  _ser,
  _sFE,
  _sIG,
  _SMR,
  _SMSP,
  _sMSP,
  _SMSPC,
  _so,
  _sP,
  _SPCC,
  _sPD,
  _SPP,
  _sPR,
  _sT,
  _st,
  _sTt,
  _T,
  _t,
  _ta,
  _TE,
  _te,
  _ten,
  _TL,
  _ty,
  _U,
  _u,
  _uA,
  _uC,
  _UES,
  _UESR,
  _UESRp,
  _UL,
  _un,
  _UP,
  _UPR,
  _UPRp,
  _uT,
  _v,
  _vC,
  _VE,
  _VED,
  _VEDa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AccountEnrollmentStatus = struct(n0, _AES, 0, [_aI, _s, _lUT, _cT], [0, 0, 4, 4]);
export var AuroraDbClusterStorage = struct(
  n0,
  _ADCS,
  0,
  [_co, _cC],
  [() => AuroraDbClusterStorageConfiguration, () => ResourceCostCalculation]
);
export var AuroraDbClusterStorageConfiguration = struct(n0, _ADCSC, 0, [_sT], [0]);
export var BlockStoragePerformanceConfiguration = struct(n0, _BSPC, 0, [_i, _t], [1, 1]);
export var ComputeConfiguration = struct(n0, _CC, 0, [_vC, _mSIMB, _a, _p], [1, 1, 0, 0]);
export var ComputeSavingsPlans = struct(
  n0,
  _CSP,
  0,
  [_co, _cC],
  [() => ComputeSavingsPlansConfiguration, () => SavingsPlansCostCalculation]
);
export var ComputeSavingsPlansConfiguration = struct(n0, _CSPC, 0, [_aS, _te, _pO, _hC], [0, 0, 0, 0]);
export var DbInstanceConfiguration = struct(n0, _DIC, 0, [_dIC], [0]);
export var DynamoDbReservedCapacity = struct(
  n0,
  _DDRC,
  0,
  [_co, _cC],
  [() => DynamoDbReservedCapacityConfiguration, () => ReservedInstancesCostCalculation]
);
export var DynamoDbReservedCapacityConfiguration = struct(
  n0,
  _DDRCC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nOCUTP, _cU],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var EbsVolume = struct(n0, _EV, 0, [_co, _cC], [() => EbsVolumeConfiguration, () => ResourceCostCalculation]);
export var EbsVolumeConfiguration = struct(
  n0,
  _EVC,
  0,
  [_st, _pe, _aSt],
  [() => StorageConfiguration, () => BlockStoragePerformanceConfiguration, 0]
);
export var Ec2AutoScalingGroup = struct(
  n0,
  _EASG,
  0,
  [_co, _cC],
  [() => Ec2AutoScalingGroupConfiguration, () => ResourceCostCalculation]
);
export var Ec2AutoScalingGroupConfiguration = struct(
  n0,
  _EASGC,
  0,
  [_in, _mI, _ty, _aSl],
  [() => InstanceConfiguration, () => MixedInstanceConfigurationList, 0, 0]
);
export var Ec2Instance = struct(
  n0,
  _EI,
  0,
  [_co, _cC],
  [() => Ec2InstanceConfiguration, () => ResourceCostCalculation]
);
export var Ec2InstanceConfiguration = struct(n0, _EIC, 0, [_in], [() => InstanceConfiguration]);
export var Ec2InstanceSavingsPlans = struct(
  n0,
  _EISP,
  0,
  [_co, _cC],
  [() => Ec2InstanceSavingsPlansConfiguration, () => SavingsPlansCostCalculation]
);
export var Ec2InstanceSavingsPlansConfiguration = struct(
  n0,
  _EISPC,
  0,
  [_aS, _te, _pO, _hC, _iF, _sPR],
  [0, 0, 0, 0, 0, 0]
);
export var Ec2ReservedInstances = struct(
  n0,
  _ERI,
  0,
  [_co, _cC],
  [() => Ec2ReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var Ec2ReservedInstancesConfiguration = struct(
  n0,
  _ERIC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _oC, _iF, _iT, _cG, _p, _ten, _sFE],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var EcsService = struct(n0, _ES, 0, [_co, _cC], [() => EcsServiceConfiguration, () => ResourceCostCalculation]);
export var EcsServiceConfiguration = struct(n0, _ESC, 0, [_com], [() => ComputeConfiguration]);
export var ElastiCacheReservedInstances = struct(
  n0,
  _ECRI,
  0,
  [_co, _cC],
  [() => ElastiCacheReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var ElastiCacheReservedInstancesConfiguration = struct(
  n0,
  _ECRIC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _iF, _iT, _cG, _sFE],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var EstimatedDiscounts = struct(n0, _ED, 0, [_sPD, _rID, _oD], [1, 1, 1]);
export var Filter = struct(
  n0,
  _F,
  0,
  [_rN, _rP, _iE, _aIc, _r, _rT, _aT, _ta, _rI, _rA, _rIe],
  [2, 2, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => TagList, 64 | 0, 64 | 0, 64 | 0]
);
export var GetPreferencesRequest = struct(n0, _GPR, 0, [], []);
export var GetPreferencesResponse = struct(n0, _GPRe, 0, [_sEM, _mADV, _pC], [0, 0, () => PreferredCommitment]);
export var GetRecommendationRequest = struct(n0, _GRR, 0, [_rIec], [0]);
export var GetRecommendationResponse = struct(
  n0,
  _GRRe,
  0,
  [
    _rIec,
    _rIes,
    _rAe,
    _aI,
    _cCu,
    _rLPID,
    _cCLPID,
    _eSP,
    _eSOCCLP,
    _cRT,
    _rRT,
    _re,
    _so,
    _lRT,
    _eMS,
    _eMC,
    _iEm,
    _rN,
    _aTc,
    _rP,
    _cRD,
    _rRD,
    _ta,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    4,
    1,
    1,
    0,
    2,
    0,
    2,
    () => ResourceDetails,
    () => ResourceDetails,
    () => TagList,
  ]
);
export var InstanceConfiguration = struct(n0, _IC, 0, [_ty], [0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var LambdaFunction = struct(
  n0,
  _LF,
  0,
  [_co, _cC],
  [() => LambdaFunctionConfiguration, () => ResourceCostCalculation]
);
export var LambdaFunctionConfiguration = struct(n0, _LFC, 0, [_com], [() => ComputeConfiguration]);
export var ListEnrollmentStatusesRequest = struct(n0, _LESR, 0, [_iOI, _aI, _nT, _mR], [2, 0, 0, 1]);
export var ListEnrollmentStatusesResponse = struct(
  n0,
  _LESRi,
  0,
  [_it, _iMA, _nT],
  [() => AccountEnrollmentStatuses, 2, 0]
);
export var ListRecommendationsRequest = struct(
  n0,
  _LRR,
  0,
  [_f, _oB, _iAR, _mR, _nT],
  [() => Filter, () => OrderBy, 2, 1, 0]
);
export var ListRecommendationsResponse = struct(n0, _LRRi, 0, [_it, _nT], [() => RecommendationList, 0]);
export var ListRecommendationSummariesRequest = struct(
  n0,
  _LRSR,
  0,
  [_f, _gB, _mR, _me, _nT],
  [() => Filter, 0, 1, 64 | 0, 0]
);
export var ListRecommendationSummariesResponse = struct(
  n0,
  _LRSRi,
  0,
  [_eTDS, _it, _gB, _cCu, _me, _nT],
  [1, () => RecommendationSummariesList, 0, 0, () => SummaryMetricsResult, 0]
);
export var MemoryDbReservedInstances = struct(
  n0,
  _MDRI,
  0,
  [_co, _cC],
  [() => MemoryDbReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var MemoryDbReservedInstancesConfiguration = struct(
  n0,
  _MDRIC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _iT, _iF, _sFE, _cG],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
);
export var MixedInstanceConfiguration = struct(n0, _MIC, 0, [_ty], [0]);
export var OpenSearchReservedInstances = struct(
  n0,
  _OSRI,
  0,
  [_co, _cC],
  [() => OpenSearchReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var OpenSearchReservedInstancesConfiguration = struct(
  n0,
  _OSRIC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _iT, _cG, _sFE],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var OrderBy = struct(n0, _OB, 0, [_d, _o], [0, 0]);
export var PreferredCommitment = struct(n0, _PC, 0, [_te, _pO], [0, 0]);
export var RdsDbInstance = struct(
  n0,
  _RDI,
  0,
  [_co, _cC],
  [() => RdsDbInstanceConfiguration, () => ResourceCostCalculation]
);
export var RdsDbInstanceConfiguration = struct(n0, _RDIC, 0, [_in], [() => DbInstanceConfiguration]);
export var RdsDbInstanceStorage = struct(
  n0,
  _RDIS,
  0,
  [_co, _cC],
  [() => RdsDbInstanceStorageConfiguration, () => ResourceCostCalculation]
);
export var RdsDbInstanceStorageConfiguration = struct(n0, _RDISC, 0, [_sT, _aSIG, _i, _sTt], [0, 1, 1, 1]);
export var RdsReservedInstances = struct(
  n0,
  _RRI,
  0,
  [_co, _cC],
  [() => RdsReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var RdsReservedInstancesConfiguration = struct(
  n0,
  _RRIC,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _iF, _iT, _sFE, _cG, _lM, _dE, _dEa, _dO],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0]
);
export var Recommendation = struct(
  n0,
  _R,
  0,
  [
    _rIec,
    _aI,
    _re,
    _rIes,
    _rAe,
    _cRT,
    _rRT,
    _eMS,
    _eSP,
    _eMC,
    _cCu,
    _iEm,
    _rN,
    _aTc,
    _rP,
    _cRS,
    _rRS,
    _lRT,
    _rLPID,
    _so,
    _ta,
  ],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 0, 2, 0, 0, 4, 1, 0, () => TagList]
);
export var RecommendationSummary = struct(n0, _RS, 0, [_g, _eMS, _rC], [0, 1, 1]);
export var RedshiftReservedInstances = struct(
  n0,
  _RRIe,
  0,
  [_co, _cC],
  [() => RedshiftReservedInstancesConfiguration, () => ReservedInstancesCostCalculation]
);
export var RedshiftReservedInstancesConfiguration = struct(
  n0,
  _RRICe,
  0,
  [_aS, _se, _te, _pO, _rIR, _uC, _mRC, _nUTP, _nOITP, _iF, _iT, _sFE, _cG],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
);
export var ReservedInstancesCostCalculation = struct(n0, _RICC, 0, [_pr], [() => ReservedInstancesPricing]);
export var ReservedInstancesPricing = struct(n0, _RIP, 0, [_eODC, _mREC, _sP, _eMARC], [1, 1, 1, 1]);
export var ResourceCostCalculation = struct(n0, _RCC, 0, [_u, _pr], [() => UsageList, () => ResourcePricing]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rIes],
  [0, 0],

  __ResourceNotFoundException
);
export var ResourcePricing = struct(n0, _RP, 0, [_eCBD, _eNUAC, _eD, _eCAD], [1, 1, () => EstimatedDiscounts, 1]);
export var SageMakerSavingsPlans = struct(
  n0,
  _SMSP,
  0,
  [_co, _cC],
  [() => SageMakerSavingsPlansConfiguration, () => SavingsPlansCostCalculation]
);
export var SageMakerSavingsPlansConfiguration = struct(n0, _SMSPC, 0, [_aS, _te, _pO, _hC], [0, 0, 0, 0]);
export var SavingsPlansCostCalculation = struct(n0, _SPCC, 0, [_pr], [() => SavingsPlansPricing]);
export var SavingsPlansPricing = struct(n0, _SPP, 0, [_mSPEC, _eMCs, _sP, _eODC], [1, 1, 1, 1]);
export var StorageConfiguration = struct(n0, _SC, 0, [_ty, _sIG], [0, 1]);
export var SummaryMetricsResult = struct(n0, _SMR, 0, [_sP], [0]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpdateEnrollmentStatusRequest = struct(n0, _UESR, 0, [_s, _iMA], [0, 2]);
export var UpdateEnrollmentStatusResponse = struct(n0, _UESRp, 0, [_s], [0]);
export var UpdatePreferencesRequest = struct(n0, _UPR, 0, [_sEM, _mADV, _pC], [0, 0, () => PreferredCommitment]);
export var UpdatePreferencesResponse = struct(n0, _UPRp, 0, [_sEM, _mADV, _pC], [0, 0, () => PreferredCommitment]);
export var Usage = struct(n0, _U, 0, [_uT, _uA, _op, _pCr, _un], [0, 1, 0, 0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rea, _fi],
  [0, 0, () => ValidationExceptionDetails],

  __ValidationException
);
export var ValidationExceptionDetail = struct(n0, _VED, 0, [_fN, _m], [0, 0]);
export var Unit = "unit" as const;

export var AccountEnrollmentStatuses = list(n0, _AESc, 0, () => AccountEnrollmentStatus);
export var AccountIdList = 64 | 0;

export var ActionTypeList = 64 | 0;

export var ImplementationEffortList = 64 | 0;

export var MixedInstanceConfigurationList = list(n0, _MICL, 0, () => MixedInstanceConfiguration);
export var RecommendationIdList = 64 | 0;

export var RecommendationList = list(n0, _RL, 0, () => Recommendation);
export var RecommendationSummariesList = list(n0, _RSL, 0, () => RecommendationSummary);
export var RegionList = 64 | 0;

export var ResourceArnList = 64 | 0;

export var ResourceIdList = 64 | 0;

export var ResourceTypeList = 64 | 0;

export var SummaryMetricsList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var UsageList = list(n0, _UL, 0, () => Usage);
export var ValidationExceptionDetails = list(n0, _VEDa, 0, () => ValidationExceptionDetail);
export var ResourceDetails = uni(
  n0,
  _RD,
  0,
  [_lF, _eS, _eI, _eV, _eASG, _eRI, _rRI, _eCRI, _oSRI, _rRIe, _eISP, _cSP, _sMSP, _rDI, _rDIS, _aDCS, _dDRC, _mDRI],
  [
    () => LambdaFunction,
    () => EcsService,
    () => Ec2Instance,
    () => EbsVolume,
    () => Ec2AutoScalingGroup,
    () => Ec2ReservedInstances,
    () => RdsReservedInstances,
    () => ElastiCacheReservedInstances,
    () => OpenSearchReservedInstances,
    () => RedshiftReservedInstances,
    () => Ec2InstanceSavingsPlans,
    () => ComputeSavingsPlans,
    () => SageMakerSavingsPlans,
    () => RdsDbInstance,
    () => RdsDbInstanceStorage,
    () => AuroraDbClusterStorage,
    () => DynamoDbReservedCapacity,
    () => MemoryDbReservedInstances,
  ]
);
export var GetPreferences = op(
  n0,
  _GP,
  0,
  () => GetPreferencesRequest,
  () => GetPreferencesResponse
);
export var GetRecommendation = op(
  n0,
  _GR,
  0,
  () => GetRecommendationRequest,
  () => GetRecommendationResponse
);
export var ListEnrollmentStatuses = op(
  n0,
  _LES,
  0,
  () => ListEnrollmentStatusesRequest,
  () => ListEnrollmentStatusesResponse
);
export var ListRecommendations = op(
  n0,
  _LR,
  0,
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse
);
export var ListRecommendationSummaries = op(
  n0,
  _LRS,
  0,
  () => ListRecommendationSummariesRequest,
  () => ListRecommendationSummariesResponse
);
export var UpdateEnrollmentStatus = op(
  n0,
  _UES,
  0,
  () => UpdateEnrollmentStatusRequest,
  () => UpdateEnrollmentStatusResponse
);
export var UpdatePreferences = op(
  n0,
  _UP,
  0,
  () => UpdatePreferencesRequest,
  () => UpdatePreferencesResponse
);
