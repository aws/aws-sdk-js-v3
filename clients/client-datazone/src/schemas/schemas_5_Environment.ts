// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aAR,
  _cA,
  _cB,
  _de,
  _DEP,
  _DEPI,
  _dI,
  _dIo,
  _eBI,
  _eBIn,
  _eCI,
  _EN,
  _ePI,
  _ePIn,
  _EPN,
  _EPS,
  _EPSn,
  _ES,
  _ESn,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LEI,
  _LEis,
  _LEO,
  _LEP,
  _LEPI,
  _LEPO,
  _mRa,
  _n,
  _nT,
  _pI,
  _pIr,
  _pro,
  _s,
  _uA,
  Description,
  n0,
  Unit_n1,
} from "./schemas_0";
import { EnvironmentConfigurationId } from "./schemas_65_Environment";

/* eslint no-var: 0 */

export var EnvironmentName = sim(n0, _EN, 0, 8);
export var EnvironmentProfileName = sim(n0, _EPN, 0, 8);
export var DeleteEnvironmentProfileInput = struct(
  n0,
  _DEPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var EnvironmentProfileSummary = struct(
  n0,
  _EPS,
  0,
  [_id, _dIo, _aAI, _aAR, _cB, _cA, _uA, _n, _de, _eBIn, _pI],
  [0, 0, 0, 0, 0, 5, 5, [() => EnvironmentProfileName, 0], [() => Description, 0], 0, 0]
);
export var EnvironmentSummary = struct(
  n0,
  _ES,
  0,
  [_pI, _id, _dIo, _cB, _cA, _uA, _n, _de, _ePIn, _aAI, _aAR, _pro, _s, _eCI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    [() => EnvironmentName, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    0,
    [() => EnvironmentConfigurationId, 0],
  ]
);
export var ListEnvironmentProfilesInput = struct(
  n0,
  _LEPI,
  0,
  [_dI, _aAI, _aAR, _eBI, _pIr, _n, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aAI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aAR,
      },
    ],
    [
      0,
      {
        [_hQ]: _eBI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pIr,
      },
    ],
    [
      () => EnvironmentProfileName,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListEnvironmentProfilesOutput = struct(
  n0,
  _LEPO,
  0,
  [_it, _nT],
  [[() => EnvironmentProfileSummaries, 0], 0]
);
export var ListEnvironmentsInput = struct(
  n0,
  _LEI,
  0,
  [_dI, _aAI, _s, _aAR, _pIr, _ePI, _eBI, _pro, _n, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aAI,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _aAR,
      },
    ],
    [
      0,
      {
        [_hQ]: _pIr,
      },
    ],
    [
      0,
      {
        [_hQ]: _ePI,
      },
    ],
    [
      0,
      {
        [_hQ]: _eBI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pro,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
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
export var ListEnvironmentsOutput = struct(n0, _LEO, 0, [_it, _nT], [[() => EnvironmentSummaries, 0], 0]);
export var EnvironmentProfileSummaries = list(n0, _EPSn, 0, [() => EnvironmentProfileSummary, 0]);
export var EnvironmentSummaries = list(n0, _ESn, 0, [() => EnvironmentSummary, 0]);
export var DeleteEnvironmentProfile = op(
  n0,
  _DEP,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}", 204],
  },
  () => DeleteEnvironmentProfileInput,
  () => Unit_n1
);
export var ListEnvironmentProfiles = op(
  n0,
  _LEP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environment-profiles", 200],
  },
  () => ListEnvironmentProfilesInput,
  () => ListEnvironmentProfilesOutput
);
export var ListEnvironments = op(
  n0,
  _LEis,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments", 200],
  },
  () => ListEnvironmentsInput,
  () => ListEnvironmentsOutput
);
