// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _Act,
  _Acti,
  _AF,
  _AFl,
  _AI,
  _ALT,
  _ALw,
  _CAPFOL,
  _CAPFOLR,
  _CAPFOLRr,
  _CD,
  _Co,
  _CTo,
  _CWME,
  _DAPFOL,
  _DAPFOLR,
  _DAPPFOL,
  _DAPPFOLR,
  _FA,
  _FP,
  _GAPCFOL,
  _GAPCFOLR,
  _GAPCFOLRe,
  _GAPFOL,
  _GAPFOLR,
  _GAPFOLRe,
  _GAPPFOL,
  _GAPPFOLR,
  _GAPPFOLRe,
  _GAPPSFOL,
  _GAPPSFOLR,
  _GAPPSFOLRe,
  _h,
  _hH,
  _hL,
  _N,
  _OLAFL,
  _OLAPA,
  _OLAPAb,
  _OLC,
  _OLCT,
  _OLTC,
  _OLTCAL,
  _OLTCL,
  _PABC,
  _PAPCFOL,
  _PAPCFOLR,
  _PAPPFOL,
  _PAPPFOLR,
  _Po,
  _PS,
  _SAP,
  _St,
  _TC,
  _TCr,
  _V,
  _xaai,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { PublicAccessBlockConfiguration } from "./schemas_1_Access";
import { PolicyStatus } from "./schemas_21_Status";

/* eslint no-var: 0 */

export var AwsLambdaTransformation = struct(n0, _ALT, 0, [_FA, _FP], [0, 0]);
export var CreateAccessPointForObjectLambdaRequest = struct(
  n0,
  _CAPFOLR,
  0,
  [_AI, _N, _Co],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [() => ObjectLambdaConfiguration, 0],
  ]
);
export var CreateAccessPointForObjectLambdaResult = struct(
  n0,
  _CAPFOLRr,
  0,
  [_OLAPA, _A],
  [0, () => ObjectLambdaAccessPointAlias]
);
export var DeleteAccessPointForObjectLambdaRequest = struct(
  n0,
  _DAPFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteAccessPointPolicyForObjectLambdaRequest = struct(
  n0,
  _DAPPFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointConfigurationForObjectLambdaRequest = struct(
  n0,
  _GAPCFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointConfigurationForObjectLambdaResult = struct(
  n0,
  _GAPCFOLRe,
  0,
  [_Co],
  [[() => ObjectLambdaConfiguration, 0]]
);
export var GetAccessPointForObjectLambdaRequest = struct(
  n0,
  _GAPFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointForObjectLambdaResult = struct(
  n0,
  _GAPFOLRe,
  0,
  [_N, _PABC, _CD, _A],
  [0, [() => PublicAccessBlockConfiguration, 0], 4, () => ObjectLambdaAccessPointAlias]
);
export var GetAccessPointPolicyForObjectLambdaRequest = struct(
  n0,
  _GAPPFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointPolicyForObjectLambdaResult = struct(n0, _GAPPFOLRe, 0, [_Po], [0]);
export var GetAccessPointPolicyStatusForObjectLambdaRequest = struct(
  n0,
  _GAPPSFOLR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointPolicyStatusForObjectLambdaResult = struct(
  n0,
  _GAPPSFOLRe,
  0,
  [_PS],
  [[() => PolicyStatus, 0]]
);
export var ObjectLambdaAccessPointAlias = struct(n0, _OLAPAb, 0, [_V, _St], [0, 0]);
export var ObjectLambdaConfiguration = struct(
  n0,
  _OLC,
  0,
  [_SAP, _CWME, _AF, _TC],
  [0, 2, [() => ObjectLambdaAllowedFeaturesList, 0], [() => ObjectLambdaTransformationConfigurationsList, 0]]
);
export var ObjectLambdaTransformationConfiguration = struct(
  n0,
  _OLTC,
  0,
  [_Act, _CTo],
  [[() => ObjectLambdaTransformationConfigurationActionsList, 0], () => ObjectLambdaContentTransformation]
);
export var PutAccessPointConfigurationForObjectLambdaRequest = struct(
  n0,
  _PAPCFOLR,
  0,
  [_AI, _N, _Co],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [() => ObjectLambdaConfiguration, 0],
  ]
);
export var PutAccessPointPolicyForObjectLambdaRequest = struct(
  n0,
  _PAPPFOLR,
  0,
  [_AI, _N, _Po],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    0,
  ]
);
export var ObjectLambdaAllowedFeaturesList = list(n0, _OLAFL, 0, [
  0,
  {
    [_xN]: _AFl,
  },
]);
export var ObjectLambdaTransformationConfigurationActionsList = list(n0, _OLTCAL, 0, [
  0,
  {
    [_xN]: _Acti,
  },
]);
export var ObjectLambdaTransformationConfigurationsList = list(n0, _OLTCL, 0, [
  () => ObjectLambdaTransformationConfiguration,
  {
    [_xN]: _TCr,
  },
]);
export var ObjectLambdaContentTransformation = uni(n0, _OLCT, 0, [_ALw], [() => AwsLambdaTransformation]);
export var CreateAccessPointForObjectLambda = op(
  n0,
  _CAPFOL,
  {
    [_h]: ["PUT", "/v20180820/accesspointforobjectlambda/{Name}", 200],
  },
  () => CreateAccessPointForObjectLambdaRequest,
  () => CreateAccessPointForObjectLambdaResult
);
export var DeleteAccessPointForObjectLambda = op(
  n0,
  _DAPFOL,
  {
    [_h]: ["DELETE", "/v20180820/accesspointforobjectlambda/{Name}", 200],
  },
  () => DeleteAccessPointForObjectLambdaRequest,
  () => Unit
);
export var DeleteAccessPointPolicyForObjectLambda = op(
  n0,
  _DAPPFOL,
  {
    [_h]: ["DELETE", "/v20180820/accesspointforobjectlambda/{Name}/policy", 200],
  },
  () => DeleteAccessPointPolicyForObjectLambdaRequest,
  () => Unit
);
export var GetAccessPointConfigurationForObjectLambda = op(
  n0,
  _GAPCFOL,
  {
    [_h]: ["GET", "/v20180820/accesspointforobjectlambda/{Name}/configuration", 200],
  },
  () => GetAccessPointConfigurationForObjectLambdaRequest,
  () => GetAccessPointConfigurationForObjectLambdaResult
);
export var GetAccessPointForObjectLambda = op(
  n0,
  _GAPFOL,
  {
    [_h]: ["GET", "/v20180820/accesspointforobjectlambda/{Name}", 200],
  },
  () => GetAccessPointForObjectLambdaRequest,
  () => GetAccessPointForObjectLambdaResult
);
export var GetAccessPointPolicyForObjectLambda = op(
  n0,
  _GAPPFOL,
  {
    [_h]: ["GET", "/v20180820/accesspointforobjectlambda/{Name}/policy", 200],
  },
  () => GetAccessPointPolicyForObjectLambdaRequest,
  () => GetAccessPointPolicyForObjectLambdaResult
);
export var GetAccessPointPolicyStatusForObjectLambda = op(
  n0,
  _GAPPSFOL,
  {
    [_h]: ["GET", "/v20180820/accesspointforobjectlambda/{Name}/policyStatus", 200],
  },
  () => GetAccessPointPolicyStatusForObjectLambdaRequest,
  () => GetAccessPointPolicyStatusForObjectLambdaResult
);
export var PutAccessPointConfigurationForObjectLambda = op(
  n0,
  _PAPCFOL,
  {
    [_h]: ["PUT", "/v20180820/accesspointforobjectlambda/{Name}/configuration", 200],
  },
  () => PutAccessPointConfigurationForObjectLambdaRequest,
  () => Unit
);
export var PutAccessPointPolicyForObjectLambda = op(
  n0,
  _PAPPFOL,
  {
    [_h]: ["PUT", "/v20180820/accesspointforobjectlambda/{Name}/policy", 200],
  },
  () => PutAccessPointPolicyForObjectLambdaRequest,
  () => Unit
);
