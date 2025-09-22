// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _Al,
  _al,
  _CA,
  _CNI,
  _CNP,
  _CNPV,
  _CNPVL,
  _CNPVo,
  _CSS,
  _D,
  _DCNPV,
  _DCNPVR,
  _DCNPVRe,
  _GCNP,
  _GCNPR,
  _GCNPRe,
  _h,
  _hQ,
  _LCNPV,
  _LCNPVR,
  _LCNPVRi,
  _MR,
  _mR,
  _mT,
  _NT,
  _nT,
  _PD,
  _PE,
  _PVI,
  _pVI,
  _RCNPV,
  _RCNPVR,
  _RCNPVRe,
  _SJCNPD,
  n0,
} from "./schemas_0";
import { CoreNetworkPolicyErrorList } from "./schemas_32_CoreNetwork";

/* eslint no-var: 0 */

export var SynthesizedJsonCoreNetworkPolicyDocument = sim(n0, _SJCNPD, 0, {
  [_mT]: _a,
});
export var CoreNetworkPolicy = struct(
  n0,
  _CNP,
  0,
  [_CNI, _PVI, _Al, _D, _CA, _CSS, _PE, _PD],
  [0, 1, 0, 0, 4, 0, () => CoreNetworkPolicyErrorList, [() => SynthesizedJsonCoreNetworkPolicyDocument, 0]]
);
export var CoreNetworkPolicyVersion = struct(n0, _CNPV, 0, [_CNI, _PVI, _Al, _D, _CA, _CSS], [0, 1, 0, 0, 4, 0]);
export var DeleteCoreNetworkPolicyVersionRequest = struct(
  n0,
  _DCNPVR,
  0,
  [_CNI, _PVI],
  [
    [0, 1],
    [1, 1],
  ]
);
export var DeleteCoreNetworkPolicyVersionResponse = struct(n0, _DCNPVRe, 0, [_CNP], [[() => CoreNetworkPolicy, 0]]);
export var GetCoreNetworkPolicyRequest = struct(
  n0,
  _GCNPR,
  0,
  [_CNI, _PVI, _Al],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _pVI,
      },
    ],
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
  ]
);
export var GetCoreNetworkPolicyResponse = struct(n0, _GCNPRe, 0, [_CNP], [[() => CoreNetworkPolicy, 0]]);
export var ListCoreNetworkPolicyVersionsRequest = struct(
  n0,
  _LCNPVR,
  0,
  [_CNI, _MR, _NT],
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
export var ListCoreNetworkPolicyVersionsResponse = struct(
  n0,
  _LCNPVRi,
  0,
  [_CNPVo, _NT],
  [() => CoreNetworkPolicyVersionList, 0]
);
export var RestoreCoreNetworkPolicyVersionRequest = struct(
  n0,
  _RCNPVR,
  0,
  [_CNI, _PVI],
  [
    [0, 1],
    [1, 1],
  ]
);
export var RestoreCoreNetworkPolicyVersionResponse = struct(n0, _RCNPVRe, 0, [_CNP], [[() => CoreNetworkPolicy, 0]]);
export var CoreNetworkPolicyVersionList = list(n0, _CNPVL, 0, () => CoreNetworkPolicyVersion);
export var DeleteCoreNetworkPolicyVersion = op(
  n0,
  _DCNPV,
  {
    [_h]: ["DELETE", "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}", 200],
  },
  () => DeleteCoreNetworkPolicyVersionRequest,
  () => DeleteCoreNetworkPolicyVersionResponse
);
export var GetCoreNetworkPolicy = op(
  n0,
  _GCNP,
  {
    [_h]: ["GET", "/core-networks/{CoreNetworkId}/core-network-policy", 200],
  },
  () => GetCoreNetworkPolicyRequest,
  () => GetCoreNetworkPolicyResponse
);
export var ListCoreNetworkPolicyVersions = op(
  n0,
  _LCNPV,
  {
    [_h]: ["GET", "/core-networks/{CoreNetworkId}/core-network-policy-versions", 200],
  },
  () => ListCoreNetworkPolicyVersionsRequest,
  () => ListCoreNetworkPolicyVersionsResponse
);
export var RestoreCoreNetworkPolicyVersion = op(
  n0,
  _RCNPV,
  {
    [_h]: ["POST", "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore", 200],
  },
  () => RestoreCoreNetworkPolicyVersionRequest,
  () => RestoreCoreNetworkPolicyVersionResponse
);
