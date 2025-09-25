// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACT,
  _BDI,
  _BDR,
  _BDRu,
  _CA,
  _CD,
  _CDR,
  _CDRr,
  _DA,
  _De,
  _Dep,
  _DI,
  _DS,
  _DT,
  _ED,
  _EM,
  _GA,
  _GDS,
  _GDSR,
  _GDSRe,
  _GI,
  _GVI,
  _h,
  _hH,
  _hQ,
  _LBDDR,
  _LBDDRR,
  _LBDDRRi,
  _LD,
  _LDR,
  _LDRi,
  _MR,
  _NT,
  _UA,
  _XACT,
  ErrorDetails,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BulkDeploymentResult = struct(
  n0,
  _BDR,
  0,
  [_CA, _DA, _DI, _DS, _DT, _ED, _EM, _GA],
  [0, 0, 0, 0, 0, () => ErrorDetails, 0, 0]
);
export var CreateDeploymentRequest = struct(
  n0,
  _CDR,
  0,
  [_ACT, _DI, _DT, _GI, _GVI],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    0,
    0,
    [0, 1],
    0,
  ]
);
export var CreateDeploymentResponse = struct(n0, _CDRr, 0, [_DA, _DI], [0, 0]);
export var Deployment = struct(n0, _De, 0, [_CA, _DA, _DI, _DT, _GA], [0, 0, 0, 0, 0]);
export var GetDeploymentStatusRequest = struct(
  n0,
  _GDSR,
  0,
  [_DI, _GI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDeploymentStatusResponse = struct(
  n0,
  _GDSRe,
  0,
  [_DS, _DT, _ED, _EM, _UA],
  [0, 0, () => ErrorDetails, 0, 0]
);
export var ListBulkDeploymentDetailedReportsRequest = struct(
  n0,
  _LBDDRR,
  0,
  [_BDI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListBulkDeploymentDetailedReportsResponse = struct(
  n0,
  _LBDDRRi,
  0,
  [_Dep, _NT],
  [() => BulkDeploymentResults, 0]
);
export var ListDeploymentsRequest = struct(
  n0,
  _LDR,
  0,
  [_GI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListDeploymentsResponse = struct(n0, _LDRi, 0, [_Dep, _NT], [() => Deployments, 0]);
export var BulkDeploymentResults = list(n0, _BDRu, 0, () => BulkDeploymentResult);
export var Deployments = list(n0, _Dep, 0, () => Deployment);
export var CreateDeployment = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/greengrass/groups/{GroupId}/deployments", 200],
  },
  () => CreateDeploymentRequest,
  () => CreateDeploymentResponse
);
export var GetDeploymentStatus = op(
  n0,
  _GDS,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status", 200],
  },
  () => GetDeploymentStatusRequest,
  () => GetDeploymentStatusResponse
);
export var ListBulkDeploymentDetailedReports = op(
  n0,
  _LBDDR,
  {
    [_h]: ["GET", "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports", 200],
  },
  () => ListBulkDeploymentDetailedReportsRequest,
  () => ListBulkDeploymentDetailedReportsResponse
);
export var ListDeployments = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/deployments", 200],
  },
  () => ListDeploymentsRequest,
  () => ListDeploymentsResponse
);
