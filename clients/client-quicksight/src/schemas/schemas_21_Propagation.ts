// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ATBS,
  _ATBSu,
  _ATu,
  _DIPC,
  _DIPCR,
  _DIPCRe,
  _h,
  _hQ,
  _LIPC,
  _LIPCR,
  _LIPCRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _Se,
  _Serv,
  _St,
  _UIPC,
  _UIPCR,
  _UIPCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizedTargetsByService = struct(n0, _ATBS, 0, [_Se, _ATu], [0, 64 | 0]);
export var DeleteIdentityPropagationConfigRequest = struct(
  n0,
  _DIPCR,
  0,
  [_AAI, _Se],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIdentityPropagationConfigResponse = struct(n0, _DIPCRe, 0, [_RI, _St], [0, [1, 32]]);
export var ListIdentityPropagationConfigsRequest = struct(
  n0,
  _LIPCR,
  0,
  [_AAI, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListIdentityPropagationConfigsResponse = struct(
  n0,
  _LIPCRi,
  0,
  [_Serv, _NT, _St, _RI],
  [() => AuthorizedTargetsByServices, 0, [1, 32], 0]
);
export var UpdateIdentityPropagationConfigRequest = struct(n0, _UIPCR, 0, [_AAI, _Se, _ATu], [[0, 1], [0, 1], 64 | 0]);
export var UpdateIdentityPropagationConfigResponse = struct(n0, _UIPCRp, 0, [_RI, _St], [0, [1, 32]]);
export var AuthorizedTargetsByServices = list(n0, _ATBSu, 0, () => AuthorizedTargetsByService);
export var AuthorizedTargetsList = 64 | 0;

export var DeleteIdentityPropagationConfig = op(
  n0,
  _DIPC,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/identity-propagation-config/{Service}", 200],
  },
  () => DeleteIdentityPropagationConfigRequest,
  () => DeleteIdentityPropagationConfigResponse
);
export var ListIdentityPropagationConfigs = op(
  n0,
  _LIPC,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/identity-propagation-config", 200],
  },
  () => ListIdentityPropagationConfigsRequest,
  () => ListIdentityPropagationConfigsResponse
);
export var UpdateIdentityPropagationConfig = op(
  n0,
  _UIPC,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/identity-propagation-config/{Service}", 200],
  },
  () => UpdateIdentityPropagationConfigRequest,
  () => UpdateIdentityPropagationConfigResponse
);
