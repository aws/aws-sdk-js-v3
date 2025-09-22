// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InvalidPolicyRevisionIdException as __InvalidPolicyRevisionIdException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  PolicyNotFoundException as __PolicyNotFoundException,
  PolicySizeLimitExceededException as __PolicySizeLimitExceededException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _AMC,
  _AMN,
  _BCRMD,
  _BCRMDE,
  _BCRMDEa,
  _BCRMDR,
  _BCRMDRa,
  _BDRMD,
  _BDRMDE,
  _BDRMDEa,
  _BDRMDR,
  _BDRMDRa,
  _c,
  _CAM,
  _CAMR,
  _CAMRr,
  _CE,
  _CEo,
  _CLE,
  _D,
  _d,
  _DA,
  _dA,
  _DAM,
  _DAMR,
  _DAMRe,
  _DC,
  _De,
  _DK,
  _DL,
  _DRMD,
  _DRMDR,
  _DRMDRe,
  _DRP,
  _DRPR,
  _DRPRe,
  _E,
  _e,
  _EC,
  _EM,
  _EPv,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IPRIE,
  _IRA,
  _m,
  _MD,
  _MDe,
  _MDI,
  _mDI,
  _MDIe,
  _MDR,
  _MDRe,
  _MPDE,
  _N,
  _Na,
  _PD,
  _PNFE,
  _PRI,
  _pRI,
  _PRMD,
  _PRMDR,
  _PRMDRu,
  _PRP,
  _PRPR,
  _PRPRu,
  _PSLEE,
  _rN,
  _rT,
  _SQEE,
  _T,
  _UAM,
  _UAMR,
  _UAMRp,
  _UL,
  _URMD,
  _URMDR,
  _URMDRp,
  _VK,
  n0,
} from "./schemas_0";
import { AppMonitorConfiguration, CustomEvents, DeobfuscationConfiguration } from "./schemas_4_App";
import { MetricDefinitions } from "./schemas_5_Rum";

/* eslint no-var: 0 */

export var BatchCreateRumMetricDefinitionsError = struct(
  n0,
  _BCRMDE,
  0,
  [_MD, _EC, _EM],
  [() => MetricDefinitionRequest, 0, 0]
);
export var BatchCreateRumMetricDefinitionsRequest = struct(
  n0,
  _BCRMDR,
  0,
  [_AMN, _De, _DA, _MDe],
  [[0, 1], 0, 0, () => MetricDefinitionsRequest]
);
export var BatchCreateRumMetricDefinitionsResponse = struct(
  n0,
  _BCRMDRa,
  0,
  [_E, _MDe],
  [() => BatchCreateRumMetricDefinitionsErrors, () => MetricDefinitions]
);
export var BatchDeleteRumMetricDefinitionsError = struct(n0, _BDRMDE, 0, [_MDI, _EC, _EM], [0, 0, 0]);
export var BatchDeleteRumMetricDefinitionsRequest = struct(
  n0,
  _BDRMDR,
  0,
  [_AMN, _De, _DA, _MDIe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _dA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _mDI,
      },
    ],
  ]
);
export var BatchDeleteRumMetricDefinitionsResponse = struct(
  n0,
  _BDRMDRa,
  0,
  [_E, _MDIe],
  [() => BatchDeleteRumMetricDefinitionsErrors, 64 | 0]
);
export var ConflictException = error(
  n0,
  _CEo,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rN, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateAppMonitorRequest = struct(
  n0,
  _CAMR,
  0,
  [_N, _D, _DL, _T, _AMC, _CLE, _CE, _DC],
  [0, 0, 64 | 0, 128 | 0, () => AppMonitorConfiguration, 2, () => CustomEvents, () => DeobfuscationConfiguration]
);
export var CreateAppMonitorResponse = struct(n0, _CAMRr, 0, [_I], [0]);
export var DeleteAppMonitorRequest = struct(n0, _DAMR, 0, [_N], [[0, 1]]);
export var DeleteAppMonitorResponse = struct(n0, _DAMRe, 0, [], []);
export var DeleteResourcePolicyRequest = struct(
  n0,
  _DRPR,
  0,
  [_N, _PRI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pRI,
      },
    ],
  ]
);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [_PRI], [0]);
export var DeleteRumMetricsDestinationRequest = struct(
  n0,
  _DRMDR,
  0,
  [_AMN, _De, _DA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _dA,
      },
    ],
  ]
);
export var DeleteRumMetricsDestinationResponse = struct(n0, _DRMDRe, 0, [], []);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_N], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_PD, _PRI], [0, 0]);
export var InvalidPolicyRevisionIdException = error(
  n0,
  _IPRIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPolicyRevisionIdException
);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MalformedPolicyDocumentException
);
export var MetricDefinitionRequest = struct(n0, _MDR, 0, [_N, _VK, _UL, _DK, _EPv, _Na], [0, 0, 0, 128 | 0, 0, 0]);
export var PolicyNotFoundException = error(
  n0,
  _PNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __PolicyNotFoundException
);
export var PolicySizeLimitExceededException = error(
  n0,
  _PSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PolicySizeLimitExceededException
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_N, _PD, _PRI], [[0, 1], 0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_PD, _PRI], [0, 0]);
export var PutRumMetricsDestinationRequest = struct(n0, _PRMDR, 0, [_AMN, _De, _DA, _IRA], [[0, 1], 0, 0, 0]);
export var PutRumMetricsDestinationResponse = struct(n0, _PRMDRu, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var UpdateAppMonitorRequest = struct(
  n0,
  _UAMR,
  0,
  [_N, _D, _DL, _AMC, _CLE, _CE, _DC],
  [[0, 1], 0, 64 | 0, () => AppMonitorConfiguration, 2, () => CustomEvents, () => DeobfuscationConfiguration]
);
export var UpdateAppMonitorResponse = struct(n0, _UAMRp, 0, [], []);
export var UpdateRumMetricDefinitionRequest = struct(
  n0,
  _URMDR,
  0,
  [_AMN, _De, _DA, _MD, _MDI],
  [[0, 1], 0, 0, () => MetricDefinitionRequest, 0]
);
export var UpdateRumMetricDefinitionResponse = struct(n0, _URMDRp, 0, [], []);
export var BatchCreateRumMetricDefinitionsErrors = list(n0, _BCRMDEa, 0, () => BatchCreateRumMetricDefinitionsError);
export var BatchDeleteRumMetricDefinitionsErrors = list(n0, _BDRMDEa, 0, () => BatchDeleteRumMetricDefinitionsError);
export var MetricDefinitionIds = 64 | 0;

export var MetricDefinitionsRequest = list(n0, _MDRe, 0, () => MetricDefinitionRequest);
export var BatchCreateRumMetricDefinitions = op(
  n0,
  _BCRMD,
  {
    [_h]: ["POST", "/rummetrics/{AppMonitorName}/metrics", 200],
  },
  () => BatchCreateRumMetricDefinitionsRequest,
  () => BatchCreateRumMetricDefinitionsResponse
);
export var BatchDeleteRumMetricDefinitions = op(
  n0,
  _BDRMD,
  {
    [_h]: ["DELETE", "/rummetrics/{AppMonitorName}/metrics", 200],
  },
  () => BatchDeleteRumMetricDefinitionsRequest,
  () => BatchDeleteRumMetricDefinitionsResponse
);
export var CreateAppMonitor = op(
  n0,
  _CAM,
  {
    [_h]: ["POST", "/appmonitor", 200],
  },
  () => CreateAppMonitorRequest,
  () => CreateAppMonitorResponse
);
export var DeleteAppMonitor = op(
  n0,
  _DAM,
  {
    [_h]: ["DELETE", "/appmonitor/{Name}", 200],
  },
  () => DeleteAppMonitorRequest,
  () => DeleteAppMonitorResponse
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/appmonitor/{Name}/policy", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var DeleteRumMetricsDestination = op(
  n0,
  _DRMD,
  {
    [_h]: ["DELETE", "/rummetrics/{AppMonitorName}/metricsdestination", 200],
  },
  () => DeleteRumMetricsDestinationRequest,
  () => DeleteRumMetricsDestinationResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/appmonitor/{Name}/policy", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/appmonitor/{Name}/policy", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var PutRumMetricsDestination = op(
  n0,
  _PRMD,
  {
    [_h]: ["POST", "/rummetrics/{AppMonitorName}/metricsdestination", 200],
  },
  () => PutRumMetricsDestinationRequest,
  () => PutRumMetricsDestinationResponse
);
export var UpdateAppMonitor = op(
  n0,
  _UAM,
  {
    [_h]: ["PATCH", "/appmonitor/{Name}", 200],
  },
  () => UpdateAppMonitorRequest,
  () => UpdateAppMonitorResponse
);
export var UpdateRumMetricDefinition = op(
  n0,
  _URMD,
  {
    [_h]: ["PATCH", "/rummetrics/{AppMonitorName}/metrics", 200],
  },
  () => UpdateRumMetricDefinitionRequest,
  () => UpdateRumMetricDefinitionResponse
);
