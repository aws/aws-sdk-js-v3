// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cI,
  _cN,
  _DIPC,
  _DIPCR,
  _DIPCRe,
  _gC,
  _gP,
  _hQ,
  _ht,
  _IPC,
  _iPC,
  _iPCA,
  _IPCd,
  _iPCd,
  _iPCN,
  _IPCR,
  _iU,
  _LIPC,
  _LIPCR,
  _LIPCRi,
  _mR,
  _n,
  _nT,
  _oi,
  _OIPC,
  _rCeq,
  _s,
  _t,
  _ty,
  _uCs,
  _uPs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIdentityProviderConfigRequest = struct(
  n0,
  _DIPCR,
  0,
  [_cN, _iPC],
  [[0, 1], () => IdentityProviderConfig]
);
export var DescribeIdentityProviderConfigResponse = struct(
  n0,
  _DIPCRe,
  0,
  [_iPC],
  [() => IdentityProviderConfigResponse]
);
export var IdentityProviderConfig = struct(n0, _IPC, 0, [_ty, _n], [0, 0]);
export var IdentityProviderConfigResponse = struct(n0, _IPCR, 0, [_oi], [() => OidcIdentityProviderConfig]);
export var ListIdentityProviderConfigsRequest = struct(
  n0,
  _LIPCR,
  0,
  [_cN, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListIdentityProviderConfigsResponse = struct(
  n0,
  _LIPCRi,
  0,
  [_iPCd, _nT],
  [() => IdentityProviderConfigs, 0]
);
export var OidcIdentityProviderConfig = struct(
  n0,
  _OIPC,
  0,
  [_iPCN, _iPCA, _cN, _iU, _cI, _uCs, _uPs, _gC, _gP, _rCeq, _t, _s],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0, 0]
);
export var IdentityProviderConfigs = list(n0, _IPCd, 0, () => IdentityProviderConfig);
export var DescribeIdentityProviderConfig = op(
  n0,
  _DIPC,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/identity-provider-configs/describe", 200],
  },
  () => DescribeIdentityProviderConfigRequest,
  () => DescribeIdentityProviderConfigResponse
);
export var ListIdentityProviderConfigs = op(
  n0,
  _LIPC,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/identity-provider-configs", 200],
  },
  () => ListIdentityProviderConfigsRequest,
  () => ListIdentityProviderConfigsResponse
);
