// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADD,
  _AMLJAu,
  _AMp,
  _ASp,
  _BCa,
  _BJN,
  _BTI,
  _CA,
  _Ca,
  _CCl,
  _CDQJD,
  _CDQJDR,
  _CDQJDRr,
  _CE,
  _CIlu,
  _CMQJD,
  _CMQJDR,
  _CMQJDRr,
  _CMSR,
  _CMSr,
  _CMSRr,
  _CPJ,
  _CPJR,
  _CPJRr,
  _CRAl,
  _CRon,
  _CT,
  _Da,
  _DAET,
  _DAST,
  _DD,
  _DDQJDe,
  _DDQJDRe,
  _DDQJDRes,
  _DDT,
  _DMQJDe,
  _DMQJDRe,
  _DMQJDRes,
  _DMSe,
  _DMSRe,
  _DMSRes,
  _DPJ,
  _DPJR,
  _DPJRe,
  _DQAS,
  _DQBC,
  _DQJI,
  _DQJOC,
  _DUb,
  _E,
  _ECxp,
  _EICTE,
  _EIn,
  _EMx,
  _EN,
  _ENI,
  _FGN,
  _FR,
  _FSO,
  _GTSI,
  _ICns,
  _IM,
  _INn,
  _IT,
  _IU,
  _JDA,
  _JDN,
  _JR,
  _KKI,
  _LMES,
  _LMT,
  _LP,
  _MASoni,
  _MBC,
  _MIon,
  _MIoni,
  _MJD,
  _MJDN,
  _MOC,
  _MQAS,
  _MQBC,
  _MQJI,
  _MQJOC,
  _MRIS,
  _MRo,
  _MSA,
  _MSC,
  _MSN,
  _MSR,
  _MSS,
  _MTo,
  _NCe,
  _OCu,
  _OF,
  _ON,
  _OSU,
  _Ou,
  _PAPSU,
  _PCC,
  _PET,
  _PFSO,
  _PIr,
  _PIroc,
  _PJA,
  _PJN,
  _PJS,
  _PO,
  _POC,
  _POr,
  _PR,
  _PSC,
  _PSI,
  _PSO,
  _PST,
  _PT,
  _QS,
  _RAo,
  _RDD,
  _RPSU,
  _SCch,
  _SCt,
  _SCTo,
  _SDDT,
  _SDT,
  _SEc,
  _SIM,
  _SIn,
  _SOu,
  _SR,
  _SUM,
  _SUr,
  _T,
  _TJA,
  _UMS,
  _UMSR,
  _UMSRp,
  _VC,
  _VKKI,
  _VSIGB,
  _WG,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";
import {
  BatchTransformInput,
  EndpointInput,
  MonitoringConstraintsResource,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
} from "./schemas_34_Job";
import { MonitoringGroundTruthS3Input, MonitoringNetworkConfig } from "./schemas_55_Job";
import { MonitoringExecutionSummary } from "./schemas_68_Job";
import { ExperimentConfig } from "./schemas_147_Job";

/* eslint no-var: 0 */

export var AppSpecification = struct(n0, _ASp, 0, [_IU, _CE, _CA], [0, 64 | 0, 64 | 0]);
export var AthenaDatasetDefinition = struct(
  n0,
  _ADD,
  0,
  [_Ca, _Da, _QS, _WG, _OSU, _KKI, _OF, _OCu],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var CreateDataQualityJobDefinitionRequest = struct(
  n0,
  _CDQJDR,
  0,
  [_JDN, _DQBC, _DQAS, _DQJI, _DQJOC, _JR, _NCe, _RAo, _SCt, _T],
  [
    0,
    () => DataQualityBaselineConfig,
    () => DataQualityAppSpecification,
    () => DataQualityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
    () => TagList,
  ]
);
export var CreateDataQualityJobDefinitionResponse = struct(n0, _CDQJDRr, 0, [_JDA], [0]);
export var CreateModelQualityJobDefinitionRequest = struct(
  n0,
  _CMQJDR,
  0,
  [_JDN, _MQBC, _MQAS, _MQJI, _MQJOC, _JR, _NCe, _RAo, _SCt, _T],
  [
    0,
    () => ModelQualityBaselineConfig,
    () => ModelQualityAppSpecification,
    () => ModelQualityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
    () => TagList,
  ]
);
export var CreateModelQualityJobDefinitionResponse = struct(n0, _CMQJDRr, 0, [_JDA], [0]);
export var CreateMonitoringScheduleRequest = struct(
  n0,
  _CMSR,
  0,
  [_MSN, _MSC, _T],
  [0, () => MonitoringScheduleConfig, () => TagList]
);
export var CreateMonitoringScheduleResponse = struct(n0, _CMSRr, 0, [_MSA], [0]);
export var CreateProcessingJobRequest = struct(
  n0,
  _CPJR,
  0,
  [_PIr, _POC, _PJN, _PR, _SCt, _ASp, _E, _NCe, _RAo, _T, _ECxp],
  [
    () => ProcessingInputs,
    () => ProcessingOutputConfig,
    0,
    () => ProcessingResources,
    () => ProcessingStoppingCondition,
    () => AppSpecification,
    128 | 0,
    () => NetworkConfig,
    0,
    () => TagList,
    () => ExperimentConfig,
  ]
);
export var CreateProcessingJobResponse = struct(n0, _CPJRr, 0, [_PJA], [0]);
export var DataQualityAppSpecification = struct(
  n0,
  _DQAS,
  0,
  [_IU, _CE, _CA, _RPSU, _PAPSU, _E],
  [0, 64 | 0, 64 | 0, 0, 0, 128 | 0]
);
export var DataQualityBaselineConfig = struct(
  n0,
  _DQBC,
  0,
  [_BJN, _CRon, _SR],
  [0, () => MonitoringConstraintsResource, () => MonitoringStatisticsResource]
);
export var DataQualityJobInput = struct(n0, _DQJI, 0, [_EIn, _BTI], [() => EndpointInput, () => BatchTransformInput]);
export var DatasetDefinition = struct(
  n0,
  _DD,
  0,
  [_ADD, _RDD, _LP, _DDT, _IM],
  [() => AthenaDatasetDefinition, () => RedshiftDatasetDefinition, 0, 0, 0]
);
export var DescribeDataQualityJobDefinitionRequest = struct(n0, _DDQJDRe, 0, [_JDN], [0]);
export var DescribeDataQualityJobDefinitionResponse = struct(
  n0,
  _DDQJDRes,
  0,
  [_JDA, _JDN, _CT, _DQBC, _DQAS, _DQJI, _DQJOC, _JR, _NCe, _RAo, _SCt],
  [
    0,
    0,
    4,
    () => DataQualityBaselineConfig,
    () => DataQualityAppSpecification,
    () => DataQualityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
  ]
);
export var DescribeModelQualityJobDefinitionRequest = struct(n0, _DMQJDRe, 0, [_JDN], [0]);
export var DescribeModelQualityJobDefinitionResponse = struct(
  n0,
  _DMQJDRes,
  0,
  [_JDA, _JDN, _CT, _MQBC, _MQAS, _MQJI, _MQJOC, _JR, _NCe, _RAo, _SCt],
  [
    0,
    0,
    4,
    () => ModelQualityBaselineConfig,
    () => ModelQualityAppSpecification,
    () => ModelQualityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
  ]
);
export var DescribeMonitoringScheduleRequest = struct(n0, _DMSRe, 0, [_MSN], [0]);
export var DescribeMonitoringScheduleResponse = struct(
  n0,
  _DMSRes,
  0,
  [_MSA, _MSN, _MSS, _MTo, _FR, _CT, _LMT, _MSC, _EN, _LMES],
  [0, 0, 0, 0, 0, 4, 4, () => MonitoringScheduleConfig, 0, () => MonitoringExecutionSummary]
);
export var DescribeProcessingJobRequest = struct(n0, _DPJR, 0, [_PJN], [0]);
export var DescribeProcessingJobResponse = struct(
  n0,
  _DPJRe,
  0,
  [
    _PIr,
    _POC,
    _PJN,
    _PR,
    _SCt,
    _ASp,
    _E,
    _NCe,
    _RAo,
    _ECxp,
    _PJA,
    _PJS,
    _EMx,
    _FR,
    _PET,
    _PST,
    _LMT,
    _CT,
    _MSA,
    _AMLJAu,
    _TJA,
  ],
  [
    () => ProcessingInputs,
    () => ProcessingOutputConfig,
    0,
    () => ProcessingResources,
    () => ProcessingStoppingCondition,
    () => AppSpecification,
    128 | 0,
    () => NetworkConfig,
    0,
    () => ExperimentConfig,
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
  ]
);
export var ModelQualityAppSpecification = struct(
  n0,
  _MQAS,
  0,
  [_IU, _CE, _CA, _RPSU, _PAPSU, _PT, _E],
  [0, 64 | 0, 64 | 0, 0, 0, 0, 128 | 0]
);
export var ModelQualityBaselineConfig = struct(n0, _MQBC, 0, [_BJN, _CRon], [0, () => MonitoringConstraintsResource]);
export var ModelQualityJobInput = struct(
  n0,
  _MQJI,
  0,
  [_EIn, _BTI, _GTSI],
  [() => EndpointInput, () => BatchTransformInput, () => MonitoringGroundTruthS3Input]
);
export var MonitoringAppSpecification = struct(
  n0,
  _MASoni,
  0,
  [_IU, _CE, _CA, _RPSU, _PAPSU],
  [0, 64 | 0, 64 | 0, 0, 0]
);
export var MonitoringBaselineConfig = struct(
  n0,
  _MBC,
  0,
  [_BJN, _CRon, _SR],
  [0, () => MonitoringConstraintsResource, () => MonitoringStatisticsResource]
);
export var MonitoringInput = struct(n0, _MIon, 0, [_EIn, _BTI], [() => EndpointInput, () => BatchTransformInput]);
export var MonitoringJobDefinition = struct(
  n0,
  _MJD,
  0,
  [_BCa, _MIoni, _MOC, _MRo, _MASoni, _SCt, _E, _NCe, _RAo],
  [
    () => MonitoringBaselineConfig,
    () => MonitoringInputs,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringAppSpecification,
    () => MonitoringStoppingCondition,
    128 | 0,
    () => NetworkConfig,
    0,
  ]
);
export var MonitoringScheduleConfig = struct(
  n0,
  _MSC,
  0,
  [_SCch, _MJD, _MJDN, _MTo],
  [() => ScheduleConfig, () => MonitoringJobDefinition, 0, 0]
);
export var MonitoringStatisticsResource = struct(n0, _MSR, 0, [_SUr], [0]);
export var NetworkConfig = struct(n0, _NCe, 0, [_EICTE, _ENI, _VC], [2, 2, () => VpcConfig]);
export var ProcessingClusterConfig = struct(n0, _PCC, 0, [_ICns, _IT, _VSIGB, _VKKI], [1, 0, 1, 0]);
export var ProcessingFeatureStoreOutput = struct(n0, _PFSO, 0, [_FGN], [0]);
export var ProcessingInput = struct(
  n0,
  _PIroc,
  0,
  [_INn, _AMp, _SIn, _DD],
  [0, 2, () => ProcessingS3Input, () => DatasetDefinition]
);
export var ProcessingOutput = struct(
  n0,
  _PO,
  0,
  [_ON, _SOu, _FSO, _AMp],
  [0, () => ProcessingS3Output, () => ProcessingFeatureStoreOutput, 2]
);
export var ProcessingOutputConfig = struct(n0, _POC, 0, [_Ou, _KKI], [() => ProcessingOutputs, 0]);
export var ProcessingResources = struct(n0, _PR, 0, [_CCl], [() => ProcessingClusterConfig]);
export var ProcessingS3Input = struct(n0, _PSI, 0, [_SUr, _LP, _SDT, _SIM, _SDDT, _SCTo], [0, 0, 0, 0, 0, 0]);
export var ProcessingS3Output = struct(n0, _PSO, 0, [_SUr, _LP, _SUM], [0, 0, 0]);
export var ProcessingStoppingCondition = struct(n0, _PSC, 0, [_MRIS], [1]);
export var RedshiftDatasetDefinition = struct(
  n0,
  _RDD,
  0,
  [_CIlu, _Da, _DUb, _QS, _CRAl, _OSU, _KKI, _OF, _OCu],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ScheduleConfig = struct(n0, _SCch, 0, [_SEc, _DAST, _DAET], [0, 0, 0]);
export var UpdateMonitoringScheduleRequest = struct(n0, _UMSR, 0, [_MSN, _MSC], [0, () => MonitoringScheduleConfig]);
export var UpdateMonitoringScheduleResponse = struct(n0, _UMSRp, 0, [_MSA], [0]);
export var ContainerArguments = 64 | 0;

export var ContainerEntrypoint = 64 | 0;

export var MonitoringContainerArguments = 64 | 0;

export var MonitoringInputs = list(n0, _MIoni, 0, () => MonitoringInput);
export var ProcessingInputs = list(n0, _PIr, 0, () => ProcessingInput);
export var ProcessingOutputs = list(n0, _POr, 0, () => ProcessingOutput);
export var ProcessingEnvironmentMap = 128 | 0;

export var CreateDataQualityJobDefinition = op(
  n0,
  _CDQJD,
  0,
  () => CreateDataQualityJobDefinitionRequest,
  () => CreateDataQualityJobDefinitionResponse
);
export var CreateModelQualityJobDefinition = op(
  n0,
  _CMQJD,
  0,
  () => CreateModelQualityJobDefinitionRequest,
  () => CreateModelQualityJobDefinitionResponse
);
export var CreateMonitoringSchedule = op(
  n0,
  _CMSr,
  0,
  () => CreateMonitoringScheduleRequest,
  () => CreateMonitoringScheduleResponse
);
export var CreateProcessingJob = op(
  n0,
  _CPJ,
  0,
  () => CreateProcessingJobRequest,
  () => CreateProcessingJobResponse
);
export var DescribeDataQualityJobDefinition = op(
  n0,
  _DDQJDe,
  0,
  () => DescribeDataQualityJobDefinitionRequest,
  () => DescribeDataQualityJobDefinitionResponse
);
export var DescribeModelQualityJobDefinition = op(
  n0,
  _DMQJDe,
  0,
  () => DescribeModelQualityJobDefinitionRequest,
  () => DescribeModelQualityJobDefinitionResponse
);
export var DescribeMonitoringSchedule = op(
  n0,
  _DMSe,
  0,
  () => DescribeMonitoringScheduleRequest,
  () => DescribeMonitoringScheduleResponse
);
export var DescribeProcessingJob = op(
  n0,
  _DPJ,
  0,
  () => DescribeProcessingJobRequest,
  () => DescribeProcessingJobResponse
);
export var UpdateMonitoringSchedule = op(
  n0,
  _UMS,
  0,
  () => UpdateMonitoringScheduleRequest,
  () => UpdateMonitoringScheduleResponse
);
