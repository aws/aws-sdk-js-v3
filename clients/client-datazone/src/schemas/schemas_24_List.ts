// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _DD,
  _de,
  _dI,
  _DN,
  _DS,
  _DSo,
  _DUS,
  _DUSo,
  _dVo,
  _eI,
  _EO,
  _eT,
  _g,
  _gIro,
  _hQ,
  _ht,
  _id,
  _it,
  _LDI,
  _LDi,
  _LDO,
  _LDUFP,
  _LDUFPI,
  _LDUFPO,
  _LEOI,
  _LEOi,
  _LEOO,
  _lUA,
  _mAI,
  _mRa,
  _n,
  _nT,
  _OGPO,
  _OPO,
  _OUPO,
  _ow,
  _pDUI,
  _pU,
  _s,
  _uIs,
  _use,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainDescription = sim(n0, _DD, 0, 8);
export var DomainName = sim(n0, _DN, 0, 8);
export var DomainSummary = struct(
  n0,
  _DS,
  0,
  [_id, _n, _de, _ar, _mAI, _s, _pU, _cA, _lUA, _dVo],
  [0, [() => DomainName, 0], [() => DomainDescription, 0], 0, 0, 0, 0, 4, 4, 0]
);
export var DomainUnitSummary = struct(n0, _DUS, 0, [_n, _id], [0, 0]);
export var ListDomainsInput = struct(
  n0,
  _LDI,
  0,
  [_s, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListDomainsOutput = struct(n0, _LDO, 0, [_it, _nT], [[() => DomainSummaries, 0], 0]);
export var ListDomainUnitsForParentInput = struct(
  n0,
  _LDUFPI,
  0,
  [_dI, _pDUI, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pDUI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListDomainUnitsForParentOutput = struct(n0, _LDUFPO, 0, [_it, _nT], [() => DomainUnitSummaries, 0]);
export var ListEntityOwnersInput = struct(
  n0,
  _LEOI,
  0,
  [_dI, _eT, _eI, _mRa, _nT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListEntityOwnersOutput = struct(n0, _LEOO, 0, [_ow, _nT], [() => EntityOwners, 0]);
export var OwnerGroupPropertiesOutput = struct(n0, _OGPO, 0, [_gIro], [0]);
export var OwnerUserPropertiesOutput = struct(n0, _OUPO, 0, [_uIs], [0]);
export var DomainSummaries = list(n0, _DSo, 0, [() => DomainSummary, 0]);
export var DomainUnitSummaries = list(n0, _DUSo, 0, () => DomainUnitSummary);
export var EntityOwners = list(n0, _EO, 0, () => OwnerPropertiesOutput);
export var OwnerPropertiesOutput = uni(
  n0,
  _OPO,
  0,
  [_use, _g],
  [() => OwnerUserPropertiesOutput, () => OwnerGroupPropertiesOutput]
);
export var ListDomains = op(
  n0,
  _LDi,
  {
    [_ht]: ["GET", "/v2/domains", 200],
  },
  () => ListDomainsInput,
  () => ListDomainsOutput
);
export var ListDomainUnitsForParent = op(
  n0,
  _LDUFP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/domain-units", 200],
  },
  () => ListDomainUnitsForParentInput,
  () => ListDomainUnitsForParentOutput
);
export var ListEntityOwners = op(
  n0,
  _LEOi,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/owners", 200],
  },
  () => ListEntityOwnersInput,
  () => ListEntityOwnersOutput
);
