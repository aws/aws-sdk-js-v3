// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aAp,
  _AAR,
  _AARs,
  _AAs,
  _aDN,
  _aI,
  _aS,
  _cA,
  _CDN,
  _CDNR,
  _CDNRr,
  _DAi,
  _DARi,
  _DARis,
  _dD,
  _DDN,
  _DDNR,
  _DDNRe,
  _de,
  _dN,
  _dNA,
  _DNC,
  _dNC,
  _DNCo,
  _dNCo,
  _GAA,
  _GAAR,
  _GAARe,
  _GDN,
  _GDNR,
  _GDNRe,
  _h,
  _hQ,
  _hZI,
  _LDN,
  _LDNR,
  _LDNRi,
  _mR,
  _nT,
  _t,
  _UDN,
  _UDNR,
  _UDNRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiAssociation = struct(n0, _AA, 0, [_dN, _aI, _aS, _dD], [0, 0, 0, 0]);
export var AssociateApiRequest = struct(n0, _AAR, 0, [_dN, _aI], [[0, 1], 0]);
export var AssociateApiResponse = struct(n0, _AARs, 0, [_aAp], [() => ApiAssociation]);
export var CreateDomainNameRequest = struct(n0, _CDNR, 0, [_dN, _cA, _de, _t], [0, 0, 0, 128 | 0]);
export var CreateDomainNameResponse = struct(n0, _CDNRr, 0, [_dNC], [() => DomainNameConfig]);
export var DeleteDomainNameRequest = struct(n0, _DDNR, 0, [_dN], [[0, 1]]);
export var DeleteDomainNameResponse = struct(n0, _DDNRe, 0, [], []);
export var DisassociateApiRequest = struct(n0, _DARi, 0, [_dN], [[0, 1]]);
export var DisassociateApiResponse = struct(n0, _DARis, 0, [], []);
export var DomainNameConfig = struct(n0, _DNC, 0, [_dN, _de, _cA, _aDN, _hZI, _t, _dNA], [0, 0, 0, 0, 0, 128 | 0, 0]);
export var GetApiAssociationRequest = struct(n0, _GAAR, 0, [_dN], [[0, 1]]);
export var GetApiAssociationResponse = struct(n0, _GAARe, 0, [_aAp], [() => ApiAssociation]);
export var GetDomainNameRequest = struct(n0, _GDNR, 0, [_dN], [[0, 1]]);
export var GetDomainNameResponse = struct(n0, _GDNRe, 0, [_dNC], [() => DomainNameConfig]);
export var ListDomainNamesRequest = struct(
  n0,
  _LDNR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDomainNamesResponse = struct(n0, _LDNRi, 0, [_dNCo, _nT], [() => DomainNameConfigs, 0]);
export var UpdateDomainNameRequest = struct(n0, _UDNR, 0, [_dN, _de], [[0, 1], 0]);
export var UpdateDomainNameResponse = struct(n0, _UDNRp, 0, [_dNC], [() => DomainNameConfig]);
export var DomainNameConfigs = list(n0, _DNCo, 0, () => DomainNameConfig);
export var AssociateApi = op(
  n0,
  _AAs,
  {
    [_h]: ["POST", "/v1/domainnames/{domainName}/apiassociation", 200],
  },
  () => AssociateApiRequest,
  () => AssociateApiResponse
);
export var CreateDomainName = op(
  n0,
  _CDN,
  {
    [_h]: ["POST", "/v1/domainnames", 200],
  },
  () => CreateDomainNameRequest,
  () => CreateDomainNameResponse
);
export var DeleteDomainName = op(
  n0,
  _DDN,
  {
    [_h]: ["DELETE", "/v1/domainnames/{domainName}", 200],
  },
  () => DeleteDomainNameRequest,
  () => DeleteDomainNameResponse
);
export var DisassociateApi = op(
  n0,
  _DAi,
  {
    [_h]: ["DELETE", "/v1/domainnames/{domainName}/apiassociation", 200],
  },
  () => DisassociateApiRequest,
  () => DisassociateApiResponse
);
export var GetApiAssociation = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/v1/domainnames/{domainName}/apiassociation", 200],
  },
  () => GetApiAssociationRequest,
  () => GetApiAssociationResponse
);
export var GetDomainName = op(
  n0,
  _GDN,
  {
    [_h]: ["GET", "/v1/domainnames/{domainName}", 200],
  },
  () => GetDomainNameRequest,
  () => GetDomainNameResponse
);
export var ListDomainNames = op(
  n0,
  _LDN,
  {
    [_h]: ["GET", "/v1/domainnames", 200],
  },
  () => ListDomainNamesRequest,
  () => ListDomainNamesResponse
);
export var UpdateDomainName = op(
  n0,
  _UDN,
  {
    [_h]: ["POST", "/v1/domainnames/{domainName}", 200],
  },
  () => UpdateDomainNameRequest,
  () => UpdateDomainNameResponse
);
