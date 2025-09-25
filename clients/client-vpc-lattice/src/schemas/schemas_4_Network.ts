// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cB,
  _cDN,
  _dE,
  _fC,
  _fM,
  _fR,
  _GSNRA,
  _GSNRAR,
  _GSNRARe,
  _GSNSA,
  _GSNSAR,
  _GSNSARe,
  _h,
  _hQ,
  _i,
  _iMA,
  _it,
  _LREA,
  _LREAR,
  _LREARi,
  _LSNRA,
  _LSNRAR,
  _LSNRARi,
  _LSNSA,
  _LSNSAR,
  _LSNSARi,
  _lUA,
  _mR,
  _nT,
  _pDE,
  _rCA,
  _rCI,
  _rCIe,
  _rCN,
  _rEAI,
  _REAL,
  _REAS,
  _sA,
  _sGI,
  _sI,
  _sIe,
  _sN,
  _sNA,
  _sNI,
  _sNIe,
  _sNN,
  _sNRAI,
  _SNRAL,
  _SNRAS,
  _sNSAI,
  _SNSAL,
  _SNSAS,
  _sNVAI,
  _st,
  _USNVA,
  _USNVAR,
  _USNVARp,
  _vEI,
  _vEO,
  n0,
} from "./schemas_0";
import { DnsEntry } from "./schemas_23_Service";

/* eslint no-var: 0 */

export var GetServiceNetworkResourceAssociationRequest = struct(n0, _GSNRAR, 0, [_sNRAI], [[0, 1]]);
export var GetServiceNetworkResourceAssociationResponse = struct(
  n0,
  _GSNRARe,
  0,
  [_i, _a, _st, _cB, _cA, _rCIe, _rCA, _rCN, _sNIe, _sNA, _sNN, _fR, _fC, _lUA, _pDE, _dE, _iMA],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, () => DnsEntry, () => DnsEntry, 2]
);
export var GetServiceNetworkServiceAssociationRequest = struct(n0, _GSNSAR, 0, [_sNSAI], [[0, 1]]);
export var GetServiceNetworkServiceAssociationResponse = struct(
  n0,
  _GSNSARe,
  0,
  [_i, _st, _a, _cB, _cA, _sIe, _sN, _sA, _sNIe, _sNN, _sNA, _dE, _cDN, _fM, _fC],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, () => DnsEntry, 0, 0, 0]
);
export var ListResourceEndpointAssociationsRequest = struct(
  n0,
  _LREAR,
  0,
  [_rCI, _rEAI, _vEI, _vEO, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _rCI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rEAI,
      },
    ],
    [
      0,
      {
        [_hQ]: _vEI,
      },
    ],
    [
      0,
      {
        [_hQ]: _vEO,
      },
    ],
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
export var ListResourceEndpointAssociationsResponse = struct(
  n0,
  _LREARi,
  0,
  [_it, _nT],
  [() => ResourceEndpointAssociationList, 0]
);
export var ListServiceNetworkResourceAssociationsRequest = struct(
  n0,
  _LSNRAR,
  0,
  [_sNI, _rCI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rCI,
      },
    ],
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
export var ListServiceNetworkResourceAssociationsResponse = struct(
  n0,
  _LSNRARi,
  0,
  [_it, _nT],
  [() => ServiceNetworkResourceAssociationList, 0]
);
export var ListServiceNetworkServiceAssociationsRequest = struct(
  n0,
  _LSNSAR,
  0,
  [_sNI, _sI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
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
export var ListServiceNetworkServiceAssociationsResponse = struct(
  n0,
  _LSNSARi,
  0,
  [_it, _nT],
  [() => ServiceNetworkServiceAssociationList, 0]
);
export var ResourceEndpointAssociationSummary = struct(
  n0,
  _REAS,
  0,
  [_i, _a, _rCIe, _rCA, _rCN, _vEI, _vEO, _cB, _cA],
  [0, 0, 0, 0, 0, 0, 0, 0, 5]
);
export var ServiceNetworkResourceAssociationSummary = struct(
  n0,
  _SNRAS,
  0,
  [_i, _a, _st, _cB, _cA, _rCIe, _rCA, _rCN, _sNIe, _sNA, _sNN, _dE, _pDE, _iMA, _fC],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, () => DnsEntry, () => DnsEntry, 2, 0]
);
export var ServiceNetworkServiceAssociationSummary = struct(
  n0,
  _SNSAS,
  0,
  [_i, _st, _a, _cB, _cA, _sIe, _sN, _sA, _sNIe, _sNN, _sNA, _dE, _cDN],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, () => DnsEntry, 0]
);
export var UpdateServiceNetworkVpcAssociationRequest = struct(n0, _USNVAR, 0, [_sNVAI, _sGI], [[0, 1], 64 | 0]);
export var UpdateServiceNetworkVpcAssociationResponse = struct(
  n0,
  _USNVARp,
  0,
  [_i, _a, _st, _cB, _sGI],
  [0, 0, 0, 0, 64 | 0]
);
export var ResourceEndpointAssociationList = list(n0, _REAL, 0, () => ResourceEndpointAssociationSummary);
export var ServiceNetworkResourceAssociationList = list(n0, _SNRAL, 0, () => ServiceNetworkResourceAssociationSummary);
export var ServiceNetworkServiceAssociationList = list(n0, _SNSAL, 0, () => ServiceNetworkServiceAssociationSummary);
export var GetServiceNetworkResourceAssociation = op(
  n0,
  _GSNRA,
  {
    [_h]: ["GET", "/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}", 200],
  },
  () => GetServiceNetworkResourceAssociationRequest,
  () => GetServiceNetworkResourceAssociationResponse
);
export var GetServiceNetworkServiceAssociation = op(
  n0,
  _GSNSA,
  {
    [_h]: ["GET", "/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}", 200],
  },
  () => GetServiceNetworkServiceAssociationRequest,
  () => GetServiceNetworkServiceAssociationResponse
);
export var ListResourceEndpointAssociations = op(
  n0,
  _LREA,
  {
    [_h]: ["GET", "/resourceendpointassociations", 200],
  },
  () => ListResourceEndpointAssociationsRequest,
  () => ListResourceEndpointAssociationsResponse
);
export var ListServiceNetworkResourceAssociations = op(
  n0,
  _LSNRA,
  {
    [_h]: ["GET", "/servicenetworkresourceassociations", 200],
  },
  () => ListServiceNetworkResourceAssociationsRequest,
  () => ListServiceNetworkResourceAssociationsResponse
);
export var ListServiceNetworkServiceAssociations = op(
  n0,
  _LSNSA,
  {
    [_h]: ["GET", "/servicenetworkserviceassociations", 200],
  },
  () => ListServiceNetworkServiceAssociationsRequest,
  () => ListServiceNetworkServiceAssociationsResponse
);
export var UpdateServiceNetworkVpcAssociation = op(
  n0,
  _USNVA,
  {
    [_h]: ["PATCH", "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}", 200],
  },
  () => UpdateServiceNetworkVpcAssociationRequest,
  () => UpdateServiceNetworkVpcAssociationResponse
);
