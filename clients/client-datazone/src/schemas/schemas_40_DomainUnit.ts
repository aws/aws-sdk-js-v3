// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aDUI,
  _cA,
  _cB,
  _CDU,
  _CDUI,
  _CDUO,
  _cT,
  _de,
  _dI,
  _dIo,
  _DUD,
  _DUGP,
  _DUN,
  _DUO,
  _DUOP,
  _DUUP,
  _g,
  _GDU,
  _GDUI,
  _GDUO,
  _gIro,
  _ht,
  _i,
  _id,
  _lUA,
  _lUBa,
  _n,
  _ow,
  _pDUI,
  _pDUIa,
  _UDU,
  _UDUI,
  _UDUO,
  _uIs,
  _use,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainUnitDescription = sim(n0, _DUD, 0, 8);
export var DomainUnitName = sim(n0, _DUN, 0, 8);
export var CreateDomainUnitInput = struct(
  n0,
  _CDUI,
  0,
  [_dI, _n, _pDUI, _de, _cT],
  [[0, 1], [() => DomainUnitName, 0], 0, [() => DomainUnitDescription, 0], [0, 4]]
);
export var CreateDomainUnitOutput = struct(
  n0,
  _CDUO,
  0,
  [_id, _dIo, _n, _pDUIa, _de, _ow, _aDUI, _cA, _cB],
  [0, 0, [() => DomainUnitName, 0], 0, [() => DomainUnitDescription, 0], () => DomainUnitOwners, 64 | 0, 4, 0]
);
export var DomainUnitGroupProperties = struct(n0, _DUGP, 0, [_gIro], [0]);
export var DomainUnitUserProperties = struct(n0, _DUUP, 0, [_uIs], [0]);
export var GetDomainUnitInput = struct(
  n0,
  _GDUI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDomainUnitOutput = struct(
  n0,
  _GDUO,
  0,
  [_id, _dIo, _n, _pDUIa, _de, _ow, _cA, _lUA, _cB, _lUBa],
  [0, 0, [() => DomainUnitName, 0], 0, [() => DomainUnitDescription, 0], () => DomainUnitOwners, 4, 4, 0, 0]
);
export var UpdateDomainUnitInput = struct(
  n0,
  _UDUI,
  0,
  [_dI, _i, _de, _n],
  [
    [0, 1],
    [0, 1],
    [() => DomainUnitDescription, 0],
    [() => DomainUnitName, 0],
  ]
);
export var UpdateDomainUnitOutput = struct(
  n0,
  _UDUO,
  0,
  [_id, _dIo, _n, _ow, _de, _pDUIa, _cA, _lUA, _cB, _lUBa],
  [0, 0, [() => DomainUnitName, 0], () => DomainUnitOwners, [() => DomainUnitDescription, 0], 0, 4, 4, 0, 0]
);
export var DomainUnitIds = 64 | 0;

export var DomainUnitOwners = list(n0, _DUO, 0, () => DomainUnitOwnerProperties);
export var DomainUnitOwnerProperties = uni(
  n0,
  _DUOP,
  0,
  [_use, _g],
  [() => DomainUnitUserProperties, () => DomainUnitGroupProperties]
);
export var CreateDomainUnit = op(
  n0,
  _CDU,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/domain-units", 201],
  },
  () => CreateDomainUnitInput,
  () => CreateDomainUnitOutput
);
export var GetDomainUnit = op(
  n0,
  _GDU,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/domain-units/{identifier}", 200],
  },
  () => GetDomainUnitInput,
  () => GetDomainUnitOutput
);
export var UpdateDomainUnit = op(
  n0,
  _UDU,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/domain-units/{identifier}", 200],
  },
  () => UpdateDomainUnitInput,
  () => UpdateDomainUnitOutput
);
