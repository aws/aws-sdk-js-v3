// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CDE,
  _CDER,
  _CDERr,
  _co,
  _DDE,
  _DDER,
  _DDERe,
  _DE,
  _dE,
  _DEL,
  _dEo,
  _DLo,
  _dNo,
  _Do,
  _do,
  _dom,
  _GDeto,
  _GDetom,
  _GDReto,
  _GDRetom,
  _GDRetoma,
  _GDRetomai,
  _ht,
  _iAsl,
  _id,
  _l,
  _m,
  _n,
  _nPT,
  _NSUS,
  _nSUS,
  _o,
  _op,
  _opti,
  _pT,
  _RDDI,
  _rDDI,
  _RHZDS,
  _rHZDS,
  _rT,
  _sC,
  _ta,
  _tar,
  _ty,
  _UDE,
  _UDER,
  _UDERp,
  n0,
  Operation,
  OperationList,
  ResourceLocation,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDomainEntryRequest = struct(n0, _CDER, 0, [_dNo, _dE], [0, () => DomainEntry]);
export var CreateDomainEntryResult = struct(n0, _CDERr, 0, [_op], [() => Operation]);
export var DeleteDomainEntryRequest = struct(n0, _DDER, 0, [_dNo, _dE], [0, () => DomainEntry]);
export var DeleteDomainEntryResult = struct(n0, _DDERe, 0, [_op], [() => Operation]);
export var Domain = struct(
  n0,
  _Do,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _dEo, _rDDI],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, () => DomainEntryList, () => RegisteredDomainDelegationInfo]
);
export var DomainEntry = struct(n0, _DE, 0, [_id, _n, _tar, _iAsl, _ty, _opti], [0, 0, 0, 2, 0, 128 | 0]);
export var GetDomainRequest = struct(n0, _GDReto, 0, [_dNo], [0]);
export var GetDomainResult = struct(n0, _GDRetom, 0, [_do], [() => Domain]);
export var GetDomainsRequest = struct(n0, _GDRetoma, 0, [_pT], [0]);
export var GetDomainsResult = struct(n0, _GDRetomai, 0, [_dom, _nPT], [() => DomainList, 0]);
export var NameServersUpdateState = struct(n0, _NSUS, 0, [_co, _m], [0, 0]);
export var R53HostedZoneDeletionState = struct(n0, _RHZDS, 0, [_co, _m], [0, 0]);
export var RegisteredDomainDelegationInfo = struct(
  n0,
  _RDDI,
  0,
  [_nSUS, _rHZDS],
  [() => NameServersUpdateState, () => R53HostedZoneDeletionState]
);
export var UpdateDomainEntryRequest = struct(n0, _UDER, 0, [_dNo, _dE], [0, () => DomainEntry]);
export var UpdateDomainEntryResult = struct(n0, _UDERp, 0, [_o], [() => OperationList]);
export var DomainEntryList = list(n0, _DEL, 0, () => DomainEntry);
export var DomainList = list(n0, _DLo, 0, () => Domain);
export var DomainEntryOptions = 128 | 0;

export var CreateDomainEntry = op(
  n0,
  _CDE,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDomainEntry", 200],
  },
  () => CreateDomainEntryRequest,
  () => CreateDomainEntryResult
);
export var DeleteDomainEntry = op(
  n0,
  _DDE,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteDomainEntry", 200],
  },
  () => DeleteDomainEntryRequest,
  () => DeleteDomainEntryResult
);
export var GetDomain = op(
  n0,
  _GDeto,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDomain", 200],
  },
  () => GetDomainRequest,
  () => GetDomainResult
);
export var GetDomains = op(
  n0,
  _GDetom,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDomains", 200],
  },
  () => GetDomainsRequest,
  () => GetDomainsResult
);
export var UpdateDomainEntry = op(
  n0,
  _UDE,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateDomainEntry", 200],
  },
  () => UpdateDomainEntryRequest,
  () => UpdateDomainEntryResult
);
