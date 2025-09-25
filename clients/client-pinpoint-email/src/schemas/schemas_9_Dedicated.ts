// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DI,
  _DIe,
  _DIL,
  _DIPe,
  _DPN,
  _GDI,
  _GDIe,
  _GDIR,
  _GDIRe,
  _GDIRet,
  _GDIRete,
  _h,
  _hQ,
  _I,
  _LDIP,
  _LDIPR,
  _LDIPRi,
  _NT,
  _PDIIP,
  _PDIIPR,
  _PDIIPRu,
  _PN,
  _PS,
  _WP,
  _WS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DedicatedIp = struct(n0, _DI, 0, [_I, _WS, _WP, _PN], [0, 0, 1, 0]);
export var GetDedicatedIpRequest = struct(n0, _GDIR, 0, [_I], [[0, 1]]);
export var GetDedicatedIpResponse = struct(n0, _GDIRe, 0, [_DI], [() => DedicatedIp]);
export var GetDedicatedIpsRequest = struct(
  n0,
  _GDIRet,
  0,
  [_PN, _NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _PN,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var GetDedicatedIpsResponse = struct(n0, _GDIRete, 0, [_DIe, _NT], [() => DedicatedIpList, 0]);
export var ListDedicatedIpPoolsRequest = struct(
  n0,
  _LDIPR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListDedicatedIpPoolsResponse = struct(n0, _LDIPRi, 0, [_DIPe, _NT], [64 | 0, 0]);
export var PutDedicatedIpInPoolRequest = struct(n0, _PDIIPR, 0, [_I, _DPN], [[0, 1], 0]);
export var PutDedicatedIpInPoolResponse = struct(n0, _PDIIPRu, 0, [], []);
export var DedicatedIpList = list(n0, _DIL, 0, () => DedicatedIp);
export var ListOfDedicatedIpPools = 64 | 0;

export var GetDedicatedIp = op(
  n0,
  _GDI,
  {
    [_h]: ["GET", "/v1/email/dedicated-ips/{Ip}", 200],
  },
  () => GetDedicatedIpRequest,
  () => GetDedicatedIpResponse
);
export var GetDedicatedIps = op(
  n0,
  _GDIe,
  {
    [_h]: ["GET", "/v1/email/dedicated-ips", 200],
  },
  () => GetDedicatedIpsRequest,
  () => GetDedicatedIpsResponse
);
export var ListDedicatedIpPools = op(
  n0,
  _LDIP,
  {
    [_h]: ["GET", "/v1/email/dedicated-ip-pools", 200],
  },
  () => ListDedicatedIpPoolsRequest,
  () => ListDedicatedIpPoolsResponse
);
export var PutDedicatedIpInPool = op(
  n0,
  _PDIIP,
  {
    [_h]: ["PUT", "/v1/email/dedicated-ips/{Ip}/pool", 200],
  },
  () => PutDedicatedIpInPoolRequest,
  () => PutDedicatedIpInPoolResponse
);
