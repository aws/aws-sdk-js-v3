// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InternalException as __InternalException,
  NotFoundException as __NotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _ABS,
  _aC,
  _AMQBP,
  _AP,
  _API,
  _Ar,
  _AVC,
  _b,
  _BA,
  _BAP,
  _BCO,
  _BDO,
  _BEV,
  _BEVL,
  _BJD,
  _BJP,
  _BN,
  _BO,
  _BRR,
  _BRRL,
  _BRS,
  _BS,
  _C,
  _c,
  _CCTA,
  _CE,
  _CGID,
  _CLLD,
  _CLLDP,
  _CO,
  _CP,
  _Cp,
  _cP,
  _CPR,
  _CPr,
  _CPRr,
  _CPS,
  _CPSI,
  _Cr,
  _CS,
  _CT,
  _CWLP,
  _D,
  _DDBSP,
  _De,
  _DLC,
  _DM,
  _DMi,
  _DN,
  _dN,
  _DO,
  _DP,
  _DPe,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _DS,
  _DSA,
  _DT,
  _dT,
  _DU,
  _DV,
  _DVT,
  _E,
  _e,
  _EBDT,
  _EBEBP,
  _EBEI,
  _EBES,
  _ECO,
  _ECOL,
  _EEC,
  _EECSMT,
  _EEF,
  _EEFL,
  _EES,
  _EEV,
  _EEVL,
  _EF,
  _EI,
  _EIAO,
  _EIAOL,
  _En,
  _EP,
  _EPn,
  _ERA,
  _ERR,
  _ERRL,
  _ES,
  _ESp,
  _ETO,
  _ETP,
  _ETU,
  _ex,
  _F,
  _f,
  _FC,
  _Fi,
  _FL,
  _fL,
  _FLD,
  _FLDP,
  _G,
  _h,
  _hE,
  _hH,
  _HP,
  _HPM,
  _HPt,
  _hQ,
  _HV,
  _IAO,
  _IE,
  _IED,
  _IT,
  _ITn,
  _ITnv,
  _JD,
  _JI,
  _JN,
  _K,
  _KBS,
  _KKI,
  _KPK,
  _KSP,
  _KTN,
  _L,
  _LC,
  _Le,
  _LFP,
  _LGA,
  _LMT,
  _LP,
  _LPR,
  _LPRi,
  _LSN,
  _LT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _m,
  _MBWIS,
  _MDI,
  _MGI,
  _MMAM,
  _MMAMu,
  _MMAN,
  _MMM,
  _MMMu,
  _MMN,
  _MN,
  _MQBAC,
  _MQBQN,
  _MR,
  _MRA,
  _MRAIS,
  _MSKAC,
  _MSKP,
  _MV,
  _MVT,
  _N,
  _n,
  _NC,
  _NFE,
  _NP,
  _NT,
  _O,
  _OF,
  _OPBIF,
  _P,
  _Pa,
  _PC,
  _PCE,
  _PCl,
  _PD,
  _PEHP,
  _PEP,
  _PF,
  _Pi,
  _Pip,
  _PK,
  _PL,
  _PLC,
  _PLCP,
  _PP,
  _PPL,
  _PPLa,
  _PPV,
  _Pr,
  _PS,
  _PSAMQBP,
  _PSDDBSP,
  _PSF,
  _PSKSP,
  _PSl,
  _PSMSKP,
  _PSP,
  _PSRMQBP,
  _PSSMKP,
  _PSSQP,
  _PT,
  _PTBJP,
  _PTCWLP,
  _PTEBEBP,
  _PTETP,
  _PTHP,
  _PTKSP,
  _PTLFP,
  _PTP,
  _PTRDP,
  _PTSMP,
  _PTSMPP,
  _PTSQP,
  _PTTP,
  _PV,
  _qC,
  _QN,
  _QSP,
  _QSPM,
  _QSV,
  _R,
  _RA,
  _rA,
  _RA_,
  _rAS,
  _RDP,
  _RI,
  _rI,
  _RMQBP,
  _RR,
  _RS,
  _rT,
  _S,
  _s,
  _sC,
  _SFSMP,
  _SG,
  _SGe,
  _SGI,
  _SGIe,
  _SI,
  _Si,
  _sIGB,
  _SIu,
  _SLD,
  _SLDP,
  _SMA,
  _SMKACC,
  _SMKACV,
  _SMKP,
  _SMM,
  _SMMi,
  _SMPP,
  _SMPPa,
  _SMPPL,
  _SMPPN,
  _SMPPV,
  _SN,
  _So,
  _SP,
  _SPo,
  _SPR,
  _SPRt,
  _SPRto,
  _SPRtop,
  _SPT,
  _SPt,
  _SPta,
  _SPto,
  _Sq,
  _SQEE,
  _SQP,
  _SR,
  _SRCC,
  _SSA,
  _SSAa,
  _Su,
  _Sub,
  _T,
  _t,
  _Ta,
  _ta,
  _Tag,
  _Tag_,
  _TC,
  _TDA,
  _TE,
  _TF,
  _TFT,
  _Ti,
  _Tim,
  _tK,
  _TL,
  _TM,
  _TN,
  _TP,
  _TPa,
  _TPi,
  _TR,
  _TRA,
  _TRR,
  _TRRa,
  _TV,
  _TVi,
  _UP,
  _UPR,
  _UPRp,
  _UPSAMQBP,
  _UPSDDBSP,
  _UPSKSP,
  _UPSMSKP,
  _UPSP,
  _UPSRMQBP,
  _UPSSMKP,
  _UPSSQP,
  _UR,
  _URI,
  _URR,
  _URRn,
  _V,
  _v,
  _VE,
  _VEF,
  _VEFL,
  _VH,
  _Vp,
  _VV,
  _w,
  _WE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CapacityProvider = sim(n0, _CP, 0, 8);
export var Database = sim(n0, _D, 0, 8);
export var DbUser = sim(n0, _DU, 0, 8);
export var EndpointString = sim(n0, _ES, 0, 8);
export var EventBridgeDetailType = sim(n0, _EBDT, 0, 8);
export var EventBridgeEndpointId = sim(n0, _EBEI, 0, 8);
export var EventBridgeEventSource = sim(n0, _EBES, 0, 8);
export var EventPattern = sim(n0, _EP, 0, 8);
export var HeaderValue = sim(n0, _HV, 0, 8);
export var InputTemplate = sim(n0, _IT, 0, 8);
export var KafkaTopicName = sim(n0, _KTN, 0, 8);
export var KinesisPartitionKey = sim(n0, _KPK, 0, 8);
export var MessageDeduplicationId = sim(n0, _MDI, 0, 8);
export var MessageGroupId = sim(n0, _MGI, 0, 8);
export var MQBrokerQueueName = sim(n0, _MQBQN, 0, 8);
export var NextToken = sim(n0, _NT, 0, 8);
export var PathParameter = sim(n0, _PP, 0, 8);
export var PipeDescription = sim(n0, _PD, 0, 8);
export var PlacementConstraintExpression = sim(n0, _PCE, 0, 8);
export var PlacementStrategyField = sim(n0, _PSF, 0, 8);
export var QueryStringValue = sim(n0, _QSV, 0, 8);
export var ReferenceId = sim(n0, _RI, 0, 8);
export var SageMakerPipelineParameterName = sim(n0, _SMPPN, 0, 8);
export var SageMakerPipelineParameterValue = sim(n0, _SMPPV, 0, 8);
export var SecurityGroup = sim(n0, _SG, 0, 8);
export var SecurityGroupId = sim(n0, _SGI, 0, 8);
export var Sql = sim(n0, _S, 0, 8);
export var StatementName = sim(n0, _SN, 0, 8);
export var Subnet = sim(n0, _Su, 0, 8);
export var SubnetId = sim(n0, _SI, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var URI = sim(n0, _URI, 0, 8);
export var AwsVpcConfiguration = struct(
  n0,
  _AVC,
  0,
  [_Sub, _SGe, _API],
  [[() => Subnets, 0], [() => SecurityGroups, 0], 0]
);
export var BatchArrayProperties = struct(n0, _BAP, 0, [_Si], [1]);
export var BatchContainerOverrides = struct(
  n0,
  _BCO,
  0,
  [_C, _E, _ITn, _RR],
  [64 | 0, () => BatchEnvironmentVariableList, 0, () => BatchResourceRequirementsList]
);
export var BatchEnvironmentVariable = struct(n0, _BEV, 0, [_N, _V], [0, 0]);
export var BatchJobDependency = struct(n0, _BJD, 0, [_JI, _T], [0, 0]);
export var BatchResourceRequirement = struct(n0, _BRR, 0, [_T, _V], [0, 0]);
export var BatchRetryStrategy = struct(n0, _BRS, 0, [_A], [1]);
export var CapacityProviderStrategyItem = struct(n0, _CPSI, 0, [_cP, _w, _b], [[() => CapacityProvider, 0], 1, 1]);
export var CloudwatchLogsLogDestination = struct(n0, _CLLD, 0, [_LGA], [0]);
export var CloudwatchLogsLogDestinationParameters = struct(n0, _CLLDP, 0, [_LGA], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreatePipeRequest = struct(
  n0,
  _CPR,
  0,
  [_N, _De, _DS, _So, _SP, _En, _EPn, _Ta, _TP, _RA, _Tag, _LC, _KKI],
  [
    [0, 1],
    [() => PipeDescription, 0],
    0,
    0,
    [() => PipeSourceParameters, 0],
    0,
    [() => PipeEnrichmentParameters, 0],
    0,
    [() => PipeTargetParameters, 0],
    0,
    [() => TagMap, 0],
    () => PipeLogConfigurationParameters,
    0,
  ]
);
export var CreatePipeResponse = struct(n0, _CPRr, 0, [_Ar, _N, _DS, _CS, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var DeadLetterConfig = struct(n0, _DLC, 0, [_Ar], [0]);
export var DeletePipeRequest = struct(n0, _DPR, 0, [_N], [[0, 1]]);
export var DeletePipeResponse = struct(n0, _DPRe, 0, [_Ar, _N, _DS, _CS, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var DescribePipeRequest = struct(n0, _DPRes, 0, [_N], [[0, 1]]);
export var DescribePipeResponse = struct(
  n0,
  _DPResc,
  0,
  [_Ar, _N, _De, _DS, _CS, _SR, _So, _SP, _En, _EPn, _Ta, _TP, _RA, _Tag, _CT, _LMT, _LC, _KKI],
  [
    0,
    0,
    [() => PipeDescription, 0],
    0,
    0,
    0,
    0,
    [() => PipeSourceParameters, 0],
    0,
    [() => PipeEnrichmentParameters, 0],
    0,
    [() => PipeTargetParameters, 0],
    0,
    [() => TagMap, 0],
    4,
    4,
    () => PipeLogConfiguration,
    0,
  ]
);
export var DimensionMapping = struct(n0, _DM, 0, [_DV, _DVT, _DN], [0, 0, 0]);
export var EcsContainerOverride = struct(
  n0,
  _ECO,
  0,
  [_C, _Cp, _E, _EF, _M, _MR, _N, _RR],
  [
    64 | 0,
    1,
    () => EcsEnvironmentVariableList,
    () => EcsEnvironmentFileList,
    1,
    1,
    0,
    () => EcsResourceRequirementsList,
  ]
);
export var EcsEnvironmentFile = struct(n0, _EEF, 0, [_t, _v], [0, 0]);
export var EcsEnvironmentVariable = struct(n0, _EEV, 0, [_n, _v], [0, 0]);
export var EcsEphemeralStorage = struct(n0, _EES, 0, [_sIGB], [1]);
export var EcsInferenceAcceleratorOverride = struct(n0, _EIAO, 0, [_dN, _dT], [0, 0]);
export var EcsResourceRequirement = struct(n0, _ERR, 0, [_t, _v], [0, 0]);
export var EcsTaskOverride = struct(
  n0,
  _ETO,
  0,
  [_CO, _Cp, _ESp, _ERA, _IAO, _M, _TRA],
  [() => EcsContainerOverrideList, 0, () => EcsEphemeralStorage, 0, () => EcsInferenceAcceleratorOverrideList, 0, 0]
);
export var Filter = struct(n0, _F, 0, [_P], [[() => EventPattern, 0]]);
export var FilterCriteria = struct(n0, _FC, 0, [_Fi], [[() => FilterList, 0]]);
export var FirehoseLogDestination = struct(n0, _FLD, 0, [_DSA], [0]);
export var FirehoseLogDestinationParameters = struct(n0, _FLDP, 0, [_DSA], [0]);
export var InternalException = error(
  n0,
  _IE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA_,
      },
    ],
  ],

  __InternalException
);
export var ListPipesRequest = struct(
  n0,
  _LPR,
  0,
  [_NP, _DS, _CS, _SPo, _TPa, _NT, _L],
  [
    [
      0,
      {
        [_hQ]: _NP,
      },
    ],
    [
      0,
      {
        [_hQ]: _DS,
      },
    ],
    [
      0,
      {
        [_hQ]: _CS,
      },
    ],
    [
      0,
      {
        [_hQ]: _SPo,
      },
    ],
    [
      0,
      {
        [_hQ]: _TPa,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _L,
      },
    ],
  ]
);
export var ListPipesResponse = struct(n0, _LPRi, 0, [_Pi, _NT], [() => PipeList, [() => NextToken, 0]]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [[() => TagMap, 0]]);
export var MultiMeasureAttributeMapping = struct(n0, _MMAM, 0, [_MV, _MVT, _MMAN], [0, 0, 0]);
export var MultiMeasureMapping = struct(n0, _MMM, 0, [_MMN, _MMAMu], [0, () => MultiMeasureAttributeMappings]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_aC], [[() => AwsVpcConfiguration, 0]]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NotFoundException
);
export var Pipe = struct(
  n0,
  _Pip,
  0,
  [_N, _Ar, _DS, _CS, _SR, _CT, _LMT, _So, _Ta, _En],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var PipeEnrichmentHttpParameters = struct(
  n0,
  _PEHP,
  0,
  [_PPV, _HP, _QSP],
  [
    [() => PathParameterList, 0],
    [() => HeaderParametersMap, 0],
    [() => QueryStringParametersMap, 0],
  ]
);
export var PipeEnrichmentParameters = struct(
  n0,
  _PEP,
  0,
  [_IT, _HPt],
  [
    [() => InputTemplate, 0],
    [() => PipeEnrichmentHttpParameters, 0],
  ]
);
export var PipeLogConfiguration = struct(
  n0,
  _PLC,
  0,
  [_SLD, _FLD, _CLLD, _Le, _IED],
  [() => S3LogDestination, () => FirehoseLogDestination, () => CloudwatchLogsLogDestination, 0, 64 | 0]
);
export var PipeLogConfigurationParameters = struct(
  n0,
  _PLCP,
  0,
  [_SLD, _FLD, _CLLD, _Le, _IED],
  [
    () => S3LogDestinationParameters,
    () => FirehoseLogDestinationParameters,
    () => CloudwatchLogsLogDestinationParameters,
    0,
    64 | 0,
  ]
);
export var PipeSourceActiveMQBrokerParameters = struct(
  n0,
  _PSAMQBP,
  0,
  [_Cr, _QN, _BS, _MBWIS],
  [() => MQBrokerAccessCredentials, [() => MQBrokerQueueName, 0], 1, 1]
);
export var PipeSourceDynamoDBStreamParameters = struct(
  n0,
  _PSDDBSP,
  0,
  [_BS, _DLC, _OPBIF, _MBWIS, _MRAIS, _MRA, _PF, _SPt],
  [1, () => DeadLetterConfig, 0, 1, 1, 1, 1, 0]
);
export var PipeSourceKinesisStreamParameters = struct(
  n0,
  _PSKSP,
  0,
  [_BS, _DLC, _OPBIF, _MBWIS, _MRAIS, _MRA, _PF, _SPt, _SPT],
  [1, () => DeadLetterConfig, 0, 1, 1, 1, 1, 0, 4]
);
export var PipeSourceManagedStreamingKafkaParameters = struct(
  n0,
  _PSMSKP,
  0,
  [_TN, _SPt, _BS, _MBWIS, _CGID, _Cr],
  [[() => KafkaTopicName, 0], 0, 1, 1, [() => URI, 0], () => MSKAccessCredentials]
);
export var PipeSourceParameters = struct(
  n0,
  _PSP,
  0,
  [_FC, _KSP, _DDBSP, _SQP, _AMQBP, _RMQBP, _MSKP, _SMKP],
  [
    [() => FilterCriteria, 0],
    () => PipeSourceKinesisStreamParameters,
    () => PipeSourceDynamoDBStreamParameters,
    () => PipeSourceSqsQueueParameters,
    [() => PipeSourceActiveMQBrokerParameters, 0],
    [() => PipeSourceRabbitMQBrokerParameters, 0],
    [() => PipeSourceManagedStreamingKafkaParameters, 0],
    [() => PipeSourceSelfManagedKafkaParameters, 0],
  ]
);
export var PipeSourceRabbitMQBrokerParameters = struct(
  n0,
  _PSRMQBP,
  0,
  [_Cr, _QN, _VH, _BS, _MBWIS],
  [() => MQBrokerAccessCredentials, [() => MQBrokerQueueName, 0], [() => URI, 0], 1, 1]
);
export var PipeSourceSelfManagedKafkaParameters = struct(
  n0,
  _PSSMKP,
  0,
  [_TN, _SPt, _ABS, _BS, _MBWIS, _CGID, _Cr, _SRCC, _Vp],
  [
    [() => KafkaTopicName, 0],
    0,
    [() => KafkaBootstrapServers, 0],
    1,
    1,
    [() => URI, 0],
    () => SelfManagedKafkaAccessConfigurationCredentials,
    0,
    [() => SelfManagedKafkaAccessConfigurationVpc, 0],
  ]
);
export var PipeSourceSqsQueueParameters = struct(n0, _PSSQP, 0, [_BS, _MBWIS], [1, 1]);
export var PipeTargetBatchJobParameters = struct(
  n0,
  _PTBJP,
  0,
  [_JD, _JN, _AP, _RS, _CO, _DO, _Pa],
  [
    0,
    0,
    () => BatchArrayProperties,
    () => BatchRetryStrategy,
    () => BatchContainerOverrides,
    () => BatchDependsOn,
    128 | 0,
  ]
);
export var PipeTargetCloudWatchLogsParameters = struct(n0, _PTCWLP, 0, [_LSN, _Ti], [0, 0]);
export var PipeTargetEcsTaskParameters = struct(
  n0,
  _PTETP,
  0,
  [_TDA, _TC, _LT, _NC, _PV, _G, _CPS, _EECSMT, _EEC, _PC, _PS, _PT, _RI, _O, _Tag],
  [
    0,
    1,
    0,
    [() => NetworkConfiguration, 0],
    0,
    0,
    [() => CapacityProviderStrategy, 0],
    2,
    2,
    [() => PlacementConstraints, 0],
    [() => PlacementStrategies, 0],
    0,
    [() => ReferenceId, 0],
    () => EcsTaskOverride,
    [() => TagList, 0],
  ]
);
export var PipeTargetEventBridgeEventBusParameters = struct(
  n0,
  _PTEBEBP,
  0,
  [_EI, _DT, _So, _R, _Tim],
  [[() => EventBridgeEndpointId, 0], [() => EventBridgeDetailType, 0], [() => EventBridgeEventSource, 0], 64 | 0, 0]
);
export var PipeTargetHttpParameters = struct(
  n0,
  _PTHP,
  0,
  [_PPV, _HP, _QSP],
  [
    [() => PathParameterList, 0],
    [() => HeaderParametersMap, 0],
    [() => QueryStringParametersMap, 0],
  ]
);
export var PipeTargetKinesisStreamParameters = struct(n0, _PTKSP, 0, [_PK], [[() => KinesisPartitionKey, 0]]);
export var PipeTargetLambdaFunctionParameters = struct(n0, _PTLFP, 0, [_ITnv], [0]);
export var PipeTargetParameters = struct(
  n0,
  _PTP,
  0,
  [_IT, _LFP, _SFSMP, _KSP, _ETP, _BJP, _SQP, _HPt, _RDP, _SMPP, _EBEBP, _CWLP, _TPi],
  [
    [() => InputTemplate, 0],
    () => PipeTargetLambdaFunctionParameters,
    () => PipeTargetStateMachineParameters,
    [() => PipeTargetKinesisStreamParameters, 0],
    [() => PipeTargetEcsTaskParameters, 0],
    () => PipeTargetBatchJobParameters,
    [() => PipeTargetSqsQueueParameters, 0],
    [() => PipeTargetHttpParameters, 0],
    [() => PipeTargetRedshiftDataParameters, 0],
    [() => PipeTargetSageMakerPipelineParameters, 0],
    [() => PipeTargetEventBridgeEventBusParameters, 0],
    () => PipeTargetCloudWatchLogsParameters,
    () => PipeTargetTimestreamParameters,
  ]
);
export var PipeTargetRedshiftDataParameters = struct(
  n0,
  _PTRDP,
  0,
  [_SMA, _D, _DU, _SN, _WE, _Sq],
  [0, [() => Database, 0], [() => DbUser, 0], [() => StatementName, 0], 2, [() => Sqls, 0]]
);
export var PipeTargetSageMakerPipelineParameters = struct(
  n0,
  _PTSMPP,
  0,
  [_PPL],
  [[() => SageMakerPipelineParameterList, 0]]
);
export var PipeTargetSqsQueueParameters = struct(
  n0,
  _PTSQP,
  0,
  [_MGI, _MDI],
  [
    [() => MessageGroupId, 0],
    [() => MessageDeduplicationId, 0],
  ]
);
export var PipeTargetStateMachineParameters = struct(n0, _PTSMP, 0, [_ITnv], [0]);
export var PipeTargetTimestreamParameters = struct(
  n0,
  _PTTP,
  0,
  [_TVi, _ETU, _TFT, _TF, _VV, _DMi, _SMM, _MMMu],
  [0, 0, 0, 0, 0, () => DimensionMappings, () => SingleMeasureMappings, () => MultiMeasureMappings]
);
export var PlacementConstraint = struct(n0, _PCl, 0, [_t, _ex], [0, [() => PlacementConstraintExpression, 0]]);
export var PlacementStrategy = struct(n0, _PS, 0, [_t, _f], [0, [() => PlacementStrategyField, 0]]);
export var S3LogDestination = struct(n0, _SLD, 0, [_BN, _Pr, _BO, _OF], [0, 0, 0, 0]);
export var S3LogDestinationParameters = struct(n0, _SLDP, 0, [_BN, _BO, _OF, _Pr], [0, 0, 0, 0]);
export var SageMakerPipelineParameter = struct(
  n0,
  _SMPPa,
  0,
  [_N, _V],
  [
    [() => SageMakerPipelineParameterName, 0],
    [() => SageMakerPipelineParameterValue, 0],
  ]
);
export var SelfManagedKafkaAccessConfigurationVpc = struct(
  n0,
  _SMKACV,
  0,
  [_Sub, _SG],
  [
    [() => SubnetIds, 0],
    [() => SecurityGroupIds, 0],
  ]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var SingleMeasureMapping = struct(n0, _SMMi, 0, [_MV, _MVT, _MN], [0, 0, 0]);
export var StartPipeRequest = struct(n0, _SPR, 0, [_N], [[0, 1]]);
export var StartPipeResponse = struct(n0, _SPRt, 0, [_Ar, _N, _DS, _CS, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var StopPipeRequest = struct(n0, _SPRto, 0, [_N], [[0, 1]]);
export var StopPipeResponse = struct(n0, _SPRtop, 0, [_Ar, _N, _DS, _CS, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var Tag = struct(n0, _Tag_, 0, [_K, _V], [0, [() => TagValue, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _ta],
  [
    [0, 1],
    [() => TagMap, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA_,
      },
    ],
  ],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdatePipeRequest = struct(
  n0,
  _UPR,
  0,
  [_N, _De, _DS, _SP, _En, _EPn, _Ta, _TP, _RA, _LC, _KKI],
  [
    [0, 1],
    [() => PipeDescription, 0],
    0,
    [() => UpdatePipeSourceParameters, 0],
    0,
    [() => PipeEnrichmentParameters, 0],
    0,
    [() => PipeTargetParameters, 0],
    0,
    () => PipeLogConfigurationParameters,
    0,
  ]
);
export var UpdatePipeResponse = struct(n0, _UPRp, 0, [_Ar, _N, _DS, _CS, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var UpdatePipeSourceActiveMQBrokerParameters = struct(
  n0,
  _UPSAMQBP,
  0,
  [_Cr, _BS, _MBWIS],
  [() => MQBrokerAccessCredentials, 1, 1]
);
export var UpdatePipeSourceDynamoDBStreamParameters = struct(
  n0,
  _UPSDDBSP,
  0,
  [_BS, _DLC, _OPBIF, _MBWIS, _MRAIS, _MRA, _PF],
  [1, () => DeadLetterConfig, 0, 1, 1, 1, 1]
);
export var UpdatePipeSourceKinesisStreamParameters = struct(
  n0,
  _UPSKSP,
  0,
  [_BS, _DLC, _OPBIF, _MBWIS, _MRAIS, _MRA, _PF],
  [1, () => DeadLetterConfig, 0, 1, 1, 1, 1]
);
export var UpdatePipeSourceManagedStreamingKafkaParameters = struct(
  n0,
  _UPSMSKP,
  0,
  [_BS, _Cr, _MBWIS],
  [1, () => MSKAccessCredentials, 1]
);
export var UpdatePipeSourceParameters = struct(
  n0,
  _UPSP,
  0,
  [_FC, _KSP, _DDBSP, _SQP, _AMQBP, _RMQBP, _MSKP, _SMKP],
  [
    [() => FilterCriteria, 0],
    () => UpdatePipeSourceKinesisStreamParameters,
    () => UpdatePipeSourceDynamoDBStreamParameters,
    () => UpdatePipeSourceSqsQueueParameters,
    () => UpdatePipeSourceActiveMQBrokerParameters,
    () => UpdatePipeSourceRabbitMQBrokerParameters,
    () => UpdatePipeSourceManagedStreamingKafkaParameters,
    [() => UpdatePipeSourceSelfManagedKafkaParameters, 0],
  ]
);
export var UpdatePipeSourceRabbitMQBrokerParameters = struct(
  n0,
  _UPSRMQBP,
  0,
  [_Cr, _BS, _MBWIS],
  [() => MQBrokerAccessCredentials, 1, 1]
);
export var UpdatePipeSourceSelfManagedKafkaParameters = struct(
  n0,
  _UPSSMKP,
  0,
  [_BS, _MBWIS, _Cr, _SRCC, _Vp],
  [1, 1, () => SelfManagedKafkaAccessConfigurationCredentials, 0, [() => SelfManagedKafkaAccessConfigurationVpc, 0]]
);
export var UpdatePipeSourceSqsQueueParameters = struct(n0, _UPSSQP, 0, [_BS, _MBWIS], [1, 1]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var BatchDependsOn = list(n0, _BDO, 0, () => BatchJobDependency);
export var BatchEnvironmentVariableList = list(n0, _BEVL, 0, () => BatchEnvironmentVariable);
export var BatchResourceRequirementsList = list(n0, _BRRL, 0, () => BatchResourceRequirement);
export var CapacityProviderStrategy = list(n0, _CPS, 0, [() => CapacityProviderStrategyItem, 0]);
export var DimensionMappings = list(n0, _DMi, 0, () => DimensionMapping);
export var EcsContainerOverrideList = list(n0, _ECOL, 0, () => EcsContainerOverride);
export var EcsEnvironmentFileList = list(n0, _EEFL, 0, () => EcsEnvironmentFile);
export var EcsEnvironmentVariableList = list(n0, _EEVL, 0, () => EcsEnvironmentVariable);
export var EcsInferenceAcceleratorOverrideList = list(n0, _EIAOL, 0, () => EcsInferenceAcceleratorOverride);
export var EcsResourceRequirementsList = list(n0, _ERRL, 0, () => EcsResourceRequirement);
export var EventBridgeEventResourceList = 64 | 0;

export var FilterList = list(n0, _FL, 0, [() => Filter, 0]);
export var IncludeExecutionData = 64 | 0;

export var KafkaBootstrapServers = list(n0, _KBS, 0, [() => EndpointString, 0]);
export var MultiMeasureAttributeMappings = list(n0, _MMAMu, 0, () => MultiMeasureAttributeMapping);
export var MultiMeasureMappings = list(n0, _MMMu, 0, () => MultiMeasureMapping);
export var PathParameterList = list(n0, _PPLa, 0, [() => PathParameter, 0]);
export var PipeList = list(n0, _PL, 0, () => Pipe);
export var PlacementConstraints = list(n0, _PC, 0, [() => PlacementConstraint, 0]);
export var PlacementStrategies = list(n0, _PSl, 0, [() => PlacementStrategy, 0]);
export var SageMakerPipelineParameterList = list(n0, _SMPPL, 0, [() => SageMakerPipelineParameter, 0]);
export var SecurityGroupIds = list(n0, _SGIe, 0, [() => SecurityGroupId, 0]);
export var SecurityGroups = list(n0, _SGe, 0, [() => SecurityGroup, 0]);
export var SingleMeasureMappings = list(n0, _SMM, 0, () => SingleMeasureMapping);
export var Sqls = list(n0, _Sq, 0, [() => Sql, 0]);
export var StringList = 64 | 0;

export var SubnetIds = list(n0, _SIu, 0, [() => SubnetId, 0]);
export var Subnets = list(n0, _Sub, 0, [() => Subnet, 0]);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, [() => Tag, 0]);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var BatchParametersMap = 128 | 0;

export var HeaderParametersMap = map(n0, _HPM, 0, [0, 0], [() => HeaderValue, 0]);
export var QueryStringParametersMap = map(n0, _QSPM, 0, [0, 0], [() => QueryStringValue, 0]);
export var TagMap = map(n0, _TM, 0, [0, 0], [() => TagValue, 0]);
export var MQBrokerAccessCredentials = uni(n0, _MQBAC, 0, [_BA], [0]);
export var MSKAccessCredentials = uni(n0, _MSKAC, 0, [_SSA, _CCTA], [0, 0]);
export var SelfManagedKafkaAccessConfigurationCredentials = uni(
  n0,
  _SMKACC,
  0,
  [_BA, _SSA, _SSAa, _CCTA],
  [0, 0, 0, 0]
);
export var CreatePipe = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/v1/pipes/{Name}", 200],
  },
  () => CreatePipeRequest,
  () => CreatePipeResponse
);
export var DeletePipe = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/v1/pipes/{Name}", 200],
  },
  () => DeletePipeRequest,
  () => DeletePipeResponse
);
export var DescribePipe = op(
  n0,
  _DPe,
  {
    [_h]: ["GET", "/v1/pipes/{Name}", 200],
  },
  () => DescribePipeRequest,
  () => DescribePipeResponse
);
export var ListPipes = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/v1/pipes", 200],
  },
  () => ListPipesRequest,
  () => ListPipesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartPipe = op(
  n0,
  _SPta,
  {
    [_h]: ["POST", "/v1/pipes/{Name}/start", 200],
  },
  () => StartPipeRequest,
  () => StartPipeResponse
);
export var StopPipe = op(
  n0,
  _SPto,
  {
    [_h]: ["POST", "/v1/pipes/{Name}/stop", 200],
  },
  () => StopPipeRequest,
  () => StopPipeResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdatePipe = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/v1/pipes/{Name}", 200],
  },
  () => UpdatePipeRequest,
  () => UpdatePipeResponse
);
