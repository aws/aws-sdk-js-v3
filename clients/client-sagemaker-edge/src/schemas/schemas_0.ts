const _AM = "AgentMetrics";
const _AV = "AgentVersion";
const _C = "Checksum";
const _CTTL = "CacheTTL";
const _D = "Definition";
const _DET = "DeploymentEndTime";
const _DFN = "DeviceFleetName";
const _DM = "DeploymentModel";
const _DMe = "DeploymentModels";
const _DN = "DeploymentName";
const _DNe = "DeviceName";
const _DR = "DeploymentResult";
const _DRe = "DeviceRegistration";
const _DS = "DesiredState";
const _DSM = "DeploymentStatusMessage";
const _DST = "DeploymentStartTime";
const _DSe = "DeploymentStatus";
const _De = "Definitions";
const _Dep = "Deployments";
const _Di = "Dimension";
const _ED = "EdgeDeployment";
const _EDd = "EdgeDeployments";
const _EM = "EdgeMetric";
const _EMd = "EdgeMetrics";
const _FHP = "FailureHandlingPolicy";
const _GD = "GetDeployments";
const _GDR = "GetDeploymentsRequest";
const _GDRR = "GetDeviceRegistrationRequest";
const _GDRRe = "GetDeviceRegistrationResult";
const _GDRe = "GetDeploymentsResult";
const _GDRet = "GetDeviceRegistration";
const _ISE = "InternalServiceException";
const _LI = "LatestInference";
const _LST = "LatestSampleTime";
const _M = "Message";
const _MH = "ModelHandle";
const _MM = "ModelMetrics";
const _MN = "ModelName";
const _MNe = "MetricName";
const _MV = "ModelVersion";
const _Mo = "Model";
const _Mod = "Models";
const _RFR = "RollbackFailureReason";
const _S = "Sum";
const _SH = "SendHeartbeat";
const _SHR = "SendHeartbeatRequest";
const _SR = "StatusReason";
const _SU = "S3Url";
const _St = "State";
const _Sta = "Status";
const _T = "Type";
const _Ti = "Timestamp";
const _V = "Value";
const _c = "client";
const _e = "error";
const _h = "http";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakeredge";
const n0 = "com.amazonaws.sagemakeredge";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { InternalServiceException as __InternalServiceException } from "../models/errors";
import { SagemakerEdgeServiceException as __SagemakerEdgeServiceException } from "../models/SagemakerEdgeServiceException";

/* eslint no-var: 0 */

export var Checksum: StaticStructureSchema = [3, n0, _C, 0, [_T, _S], [0, 0]];
export var Definition: StaticStructureSchema = [3, n0, _D, 0, [_MH, _SU, _C, _St], [0, 0, () => Checksum, 0]];
export var DeploymentModel: StaticStructureSchema = [
  3,
  n0,
  _DM,
  0,
  [_MH, _MN, _MV, _DS, _St, _Sta, _SR, _RFR],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
export var DeploymentResult: StaticStructureSchema = [
  3,
  n0,
  _DR,
  0,
  [_DN, _DSe, _DSM, _DST, _DET, _DMe],
  [0, 0, 0, 4, 4, () => DeploymentModels],
];
export var EdgeDeployment: StaticStructureSchema = [3, n0, _ED, 0, [_DN, _T, _FHP, _De], [0, 0, 0, () => Definitions]];
export var EdgeMetric: StaticStructureSchema = [3, n0, _EM, 0, [_Di, _MNe, _V, _Ti], [0, 0, 1, 4]];
export var GetDeploymentsRequest: StaticStructureSchema = [3, n0, _GDR, 0, [_DNe, _DFN], [0, 0]];
export var GetDeploymentsResult: StaticStructureSchema = [3, n0, _GDRe, 0, [_Dep], [() => EdgeDeployments]];
export var GetDeviceRegistrationRequest: StaticStructureSchema = [3, n0, _GDRR, 0, [_DNe, _DFN], [0, 0]];
export var GetDeviceRegistrationResult: StaticStructureSchema = [3, n0, _GDRRe, 0, [_DRe, _CTTL], [0, 0]];
export var InternalServiceException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceException, __InternalServiceException);

export var Model: StaticStructureSchema = [3, n0, _Mo, 0, [_MN, _MV, _LST, _LI, _MM], [0, 0, 4, 4, () => EdgeMetrics]];
export var SendHeartbeatRequest: StaticStructureSchema = [
  3,
  n0,
  _SHR,
  0,
  [_AM, _Mod, _AV, _DNe, _DFN, _DR],
  [() => EdgeMetrics, () => Models, 0, 0, 0, () => DeploymentResult],
];
export var __Unit = "unit" as const;

export var SagemakerEdgeServiceException: StaticErrorSchema = [-3, _s, "SagemakerEdgeServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(SagemakerEdgeServiceException, __SagemakerEdgeServiceException);

export var Definitions: StaticListSchema = [1, n0, _De, 0, () => Definition];
export var DeploymentModels: StaticListSchema = [1, n0, _DMe, 0, () => DeploymentModel];
export var EdgeDeployments: StaticListSchema = [1, n0, _EDd, 0, () => EdgeDeployment];
export var EdgeMetrics: StaticListSchema = [1, n0, _EMd, 0, () => EdgeMetric];
export var Models: StaticListSchema = [1, n0, _Mod, 0, () => Model];
export var GetDeployments: StaticOperationSchema = [
  9,
  n0,
  _GD,
  {
    [_h]: ["POST", "/GetDeployments", 200],
  },
  () => GetDeploymentsRequest,
  () => GetDeploymentsResult,
];
export var GetDeviceRegistration: StaticOperationSchema = [
  9,
  n0,
  _GDRet,
  {
    [_h]: ["POST", "/GetDeviceRegistration", 200],
  },
  () => GetDeviceRegistrationRequest,
  () => GetDeviceRegistrationResult,
];
export var SendHeartbeat: StaticOperationSchema = [
  9,
  n0,
  _SH,
  {
    [_h]: ["POST", "/SendHeartbeat", 200],
  },
  () => SendHeartbeatRequest,
  () => __Unit,
];
