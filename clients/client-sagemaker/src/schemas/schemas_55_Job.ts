// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BJN,
  _BTI,
  _CMBJD,
  _CMBJDR,
  _CMBJDRr,
  _CMEJD,
  _CMEJDR,
  _CMEJDRr,
  _CRon,
  _CT,
  _CU,
  _DMBJDe,
  _DMBJDRe,
  _DMBJDRes,
  _DMEJDe,
  _DMEJDRe,
  _DMEJDRes,
  _E,
  _EICTE,
  _EIn,
  _ENI,
  _GTSI,
  _IU,
  _JDA,
  _JDN,
  _JR,
  _MBAS,
  _MBBC,
  _MBJI,
  _MBJOC,
  _MEAS,
  _MEBC,
  _MEJI,
  _MEJOC,
  _MGTSI,
  _MNCo,
  _NCe,
  _RAo,
  _SCt,
  _SUr,
  _T,
  _VC,
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

/* eslint no-var: 0 */

export var CreateModelBiasJobDefinitionRequest = struct(
  n0,
  _CMBJDR,
  0,
  [_JDN, _MBBC, _MBAS, _MBJI, _MBJOC, _JR, _NCe, _RAo, _SCt, _T],
  [
    0,
    () => ModelBiasBaselineConfig,
    () => ModelBiasAppSpecification,
    () => ModelBiasJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
    () => TagList,
  ]
);
export var CreateModelBiasJobDefinitionResponse = struct(n0, _CMBJDRr, 0, [_JDA], [0]);
export var CreateModelExplainabilityJobDefinitionRequest = struct(
  n0,
  _CMEJDR,
  0,
  [_JDN, _MEBC, _MEAS, _MEJI, _MEJOC, _JR, _NCe, _RAo, _SCt, _T],
  [
    0,
    () => ModelExplainabilityBaselineConfig,
    () => ModelExplainabilityAppSpecification,
    () => ModelExplainabilityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
    () => TagList,
  ]
);
export var CreateModelExplainabilityJobDefinitionResponse = struct(n0, _CMEJDRr, 0, [_JDA], [0]);
export var DescribeModelBiasJobDefinitionRequest = struct(n0, _DMBJDRe, 0, [_JDN], [0]);
export var DescribeModelBiasJobDefinitionResponse = struct(
  n0,
  _DMBJDRes,
  0,
  [_JDA, _JDN, _CT, _MBBC, _MBAS, _MBJI, _MBJOC, _JR, _NCe, _RAo, _SCt],
  [
    0,
    0,
    4,
    () => ModelBiasBaselineConfig,
    () => ModelBiasAppSpecification,
    () => ModelBiasJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
  ]
);
export var DescribeModelExplainabilityJobDefinitionRequest = struct(n0, _DMEJDRe, 0, [_JDN], [0]);
export var DescribeModelExplainabilityJobDefinitionResponse = struct(
  n0,
  _DMEJDRes,
  0,
  [_JDA, _JDN, _CT, _MEBC, _MEAS, _MEJI, _MEJOC, _JR, _NCe, _RAo, _SCt],
  [
    0,
    0,
    4,
    () => ModelExplainabilityBaselineConfig,
    () => ModelExplainabilityAppSpecification,
    () => ModelExplainabilityJobInput,
    () => MonitoringOutputConfig,
    () => MonitoringResources,
    () => MonitoringNetworkConfig,
    0,
    () => MonitoringStoppingCondition,
  ]
);
export var ModelBiasAppSpecification = struct(n0, _MBAS, 0, [_IU, _CU, _E], [0, 0, 128 | 0]);
export var ModelBiasBaselineConfig = struct(n0, _MBBC, 0, [_BJN, _CRon], [0, () => MonitoringConstraintsResource]);
export var ModelBiasJobInput = struct(
  n0,
  _MBJI,
  0,
  [_EIn, _BTI, _GTSI],
  [() => EndpointInput, () => BatchTransformInput, () => MonitoringGroundTruthS3Input]
);
export var ModelExplainabilityAppSpecification = struct(n0, _MEAS, 0, [_IU, _CU, _E], [0, 0, 128 | 0]);
export var ModelExplainabilityBaselineConfig = struct(
  n0,
  _MEBC,
  0,
  [_BJN, _CRon],
  [0, () => MonitoringConstraintsResource]
);
export var ModelExplainabilityJobInput = struct(
  n0,
  _MEJI,
  0,
  [_EIn, _BTI],
  [() => EndpointInput, () => BatchTransformInput]
);
export var MonitoringGroundTruthS3Input = struct(n0, _MGTSI, 0, [_SUr], [0]);
export var MonitoringNetworkConfig = struct(n0, _MNCo, 0, [_EICTE, _ENI, _VC], [2, 2, () => VpcConfig]);
export var CreateModelBiasJobDefinition = op(
  n0,
  _CMBJD,
  0,
  () => CreateModelBiasJobDefinitionRequest,
  () => CreateModelBiasJobDefinitionResponse
);
export var CreateModelExplainabilityJobDefinition = op(
  n0,
  _CMEJD,
  0,
  () => CreateModelExplainabilityJobDefinitionRequest,
  () => CreateModelExplainabilityJobDefinitionResponse
);
export var DescribeModelBiasJobDefinition = op(
  n0,
  _DMBJDe,
  0,
  () => DescribeModelBiasJobDefinitionRequest,
  () => DescribeModelBiasJobDefinitionResponse
);
export var DescribeModelExplainabilityJobDefinition = op(
  n0,
  _DMEJDe,
  0,
  () => DescribeModelExplainabilityJobDefinitionRequest,
  () => DescribeModelExplainabilityJobDefinitionResponse
);
