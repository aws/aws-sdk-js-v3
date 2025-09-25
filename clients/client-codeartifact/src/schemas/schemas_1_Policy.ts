// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _d,
  _DDPP,
  _DDPPR,
  _DDPPRe,
  _dO,
  _do,
  _doc,
  _DRPP,
  _DRPPR,
  _DRPPRe,
  _GDPP,
  _GDPPR,
  _GDPPRe,
  _GRPP,
  _GRPPR,
  _GRPPRe,
  _hQ,
  _ht,
  _pD,
  _PDPP,
  _PDPPR,
  _PDPPRu,
  _po,
  _pR,
  _pr,
  _PRPP,
  _PRPPR,
  _PRPPRu,
  _r,
  _rA,
  _re,
  _RP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainPermissionsPolicyRequest = struct(
  n0,
  _DDPPR,
  0,
  [_d, _dO, _pR],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _pr,
      },
    ],
  ]
);
export var DeleteDomainPermissionsPolicyResult = struct(n0, _DDPPRe, 0, [_po], [() => ResourcePolicy]);
export var DeleteRepositoryPermissionsPolicyRequest = struct(
  n0,
  _DRPPR,
  0,
  [_d, _dO, _r, _pR],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _pr,
      },
    ],
  ]
);
export var DeleteRepositoryPermissionsPolicyResult = struct(n0, _DRPPRe, 0, [_po], [() => ResourcePolicy]);
export var GetDomainPermissionsPolicyRequest = struct(
  n0,
  _GDPPR,
  0,
  [_d, _dO],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
  ]
);
export var GetDomainPermissionsPolicyResult = struct(n0, _GDPPRe, 0, [_po], [() => ResourcePolicy]);
export var GetRepositoryPermissionsPolicyRequest = struct(
  n0,
  _GRPPR,
  0,
  [_d, _dO, _r],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetRepositoryPermissionsPolicyResult = struct(n0, _GRPPRe, 0, [_po], [() => ResourcePolicy]);
export var PutDomainPermissionsPolicyRequest = struct(n0, _PDPPR, 0, [_d, _dO, _pR, _pD], [0, 0, 0, 0]);
export var PutDomainPermissionsPolicyResult = struct(n0, _PDPPRu, 0, [_po], [() => ResourcePolicy]);
export var PutRepositoryPermissionsPolicyRequest = struct(
  n0,
  _PRPPR,
  0,
  [_d, _dO, _r, _pR, _pD],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    0,
    0,
  ]
);
export var PutRepositoryPermissionsPolicyResult = struct(n0, _PRPPRu, 0, [_po], [() => ResourcePolicy]);
export var ResourcePolicy = struct(n0, _RP, 0, [_rA, _re, _doc], [0, 0, 0]);
export var DeleteDomainPermissionsPolicy = op(
  n0,
  _DDPP,
  {
    [_ht]: ["DELETE", "/v1/domain/permissions/policy", 200],
  },
  () => DeleteDomainPermissionsPolicyRequest,
  () => DeleteDomainPermissionsPolicyResult
);
export var DeleteRepositoryPermissionsPolicy = op(
  n0,
  _DRPP,
  {
    [_ht]: ["DELETE", "/v1/repository/permissions/policies", 200],
  },
  () => DeleteRepositoryPermissionsPolicyRequest,
  () => DeleteRepositoryPermissionsPolicyResult
);
export var GetDomainPermissionsPolicy = op(
  n0,
  _GDPP,
  {
    [_ht]: ["GET", "/v1/domain/permissions/policy", 200],
  },
  () => GetDomainPermissionsPolicyRequest,
  () => GetDomainPermissionsPolicyResult
);
export var GetRepositoryPermissionsPolicy = op(
  n0,
  _GRPP,
  {
    [_ht]: ["GET", "/v1/repository/permissions/policy", 200],
  },
  () => GetRepositoryPermissionsPolicyRequest,
  () => GetRepositoryPermissionsPolicyResult
);
export var PutDomainPermissionsPolicy = op(
  n0,
  _PDPP,
  {
    [_ht]: ["PUT", "/v1/domain/permissions/policy", 200],
  },
  () => PutDomainPermissionsPolicyRequest,
  () => PutDomainPermissionsPolicyResult
);
export var PutRepositoryPermissionsPolicy = op(
  n0,
  _PRPP,
  {
    [_ht]: ["PUT", "/v1/repository/permissions/policy", 200],
  },
  () => PutRepositoryPermissionsPolicyRequest,
  () => PutRepositoryPermissionsPolicyResult
);
