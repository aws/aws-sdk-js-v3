// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CPDN,
  _CPDNR,
  _CPDNr,
  _CPDNRr,
  _CPDNRre,
  _CPDNRrea,
  _CRI,
  _D,
  _DP,
  _I,
  _N,
  _Na,
  _OI,
  _P,
  _PDNC,
  _PDNCu,
  _PDNP,
  _PDNPC,
  _PDNPCu,
  _PDNPu,
  _PDPM,
  _PDPMC,
  _PDPMCu,
  _PDPMu,
  _SOA,
  _SOAC,
  _T,
  _TTL,
  _UPDN,
  _UPDNp,
  _UPDNR,
  _UPDNRp,
  _UPDNRpd,
  _UPDNRpda,
  _URI,
  _V,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var CreatePrivateDnsNamespaceRequest = struct(
  n0,
  _CPDNR,
  0,
  [_N, _CRI, _D, _V, _T, _P],
  [0, [0, 4], 0, 0, () => TagList, () => PrivateDnsNamespaceProperties]
);
export var CreatePrivateDnsNamespaceResponse = struct(n0, _CPDNRr, 0, [_OI], [0]);
export var CreatePublicDnsNamespaceRequest = struct(
  n0,
  _CPDNRre,
  0,
  [_N, _CRI, _D, _T, _P],
  [0, [0, 4], 0, () => TagList, () => PublicDnsNamespaceProperties]
);
export var CreatePublicDnsNamespaceResponse = struct(n0, _CPDNRrea, 0, [_OI], [0]);
export var PrivateDnsNamespaceChange = struct(n0, _PDNC, 0, [_D, _P], [0, () => PrivateDnsNamespacePropertiesChange]);
export var PrivateDnsNamespaceProperties = struct(n0, _PDNP, 0, [_DP], [() => PrivateDnsPropertiesMutable]);
export var PrivateDnsNamespacePropertiesChange = struct(
  n0,
  _PDNPC,
  0,
  [_DP],
  [() => PrivateDnsPropertiesMutableChange]
);
export var PrivateDnsPropertiesMutable = struct(n0, _PDPM, 0, [_SOA], [() => SOA]);
export var PrivateDnsPropertiesMutableChange = struct(n0, _PDPMC, 0, [_SOA], [() => SOAChange]);
export var PublicDnsNamespaceChange = struct(n0, _PDNCu, 0, [_D, _P], [0, () => PublicDnsNamespacePropertiesChange]);
export var PublicDnsNamespaceProperties = struct(n0, _PDNPu, 0, [_DP], [() => PublicDnsPropertiesMutable]);
export var PublicDnsNamespacePropertiesChange = struct(n0, _PDNPCu, 0, [_DP], [() => PublicDnsPropertiesMutableChange]);
export var PublicDnsPropertiesMutable = struct(n0, _PDPMu, 0, [_SOA], [() => SOA]);
export var PublicDnsPropertiesMutableChange = struct(n0, _PDPMCu, 0, [_SOA], [() => SOAChange]);
export var SOA = struct(n0, _SOA, 0, [_TTL], [1]);
export var SOAChange = struct(n0, _SOAC, 0, [_TTL], [1]);
export var UpdatePrivateDnsNamespaceRequest = struct(
  n0,
  _UPDNR,
  0,
  [_I, _URI, _Na],
  [0, [0, 4], () => PrivateDnsNamespaceChange]
);
export var UpdatePrivateDnsNamespaceResponse = struct(n0, _UPDNRp, 0, [_OI], [0]);
export var UpdatePublicDnsNamespaceRequest = struct(
  n0,
  _UPDNRpd,
  0,
  [_I, _URI, _Na],
  [0, [0, 4], () => PublicDnsNamespaceChange]
);
export var UpdatePublicDnsNamespaceResponse = struct(n0, _UPDNRpda, 0, [_OI], [0]);
export var CreatePrivateDnsNamespace = op(
  n0,
  _CPDN,
  0,
  () => CreatePrivateDnsNamespaceRequest,
  () => CreatePrivateDnsNamespaceResponse
);
export var CreatePublicDnsNamespace = op(
  n0,
  _CPDNr,
  0,
  () => CreatePublicDnsNamespaceRequest,
  () => CreatePublicDnsNamespaceResponse
);
export var UpdatePrivateDnsNamespace = op(
  n0,
  _UPDN,
  0,
  () => UpdatePrivateDnsNamespaceRequest,
  () => UpdatePrivateDnsNamespaceResponse
);
export var UpdatePublicDnsNamespace = op(
  n0,
  _UPDNp,
  0,
  () => UpdatePublicDnsNamespaceRequest,
  () => UpdatePublicDnsNamespaceResponse
);
