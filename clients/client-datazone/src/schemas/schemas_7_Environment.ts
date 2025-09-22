// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aCL,
  _ACLP,
  _AP,
  _CEAI,
  _CEAO,
  _CEAr,
  _de,
  _dI,
  _dIo,
  _EAS,
  _eInv,
  _eInvi,
  _GEA,
  _GEAI,
  _GEAO,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LEA,
  _LEAI,
  _LEAO,
  _LEAS,
  _mRa,
  _n,
  _nT,
  _par,
  _u,
  _UEA,
  _UEAI,
  _UEAO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AwsConsoleLinkParameters = struct(n0, _ACLP, 0, [_u], [0]);
export var CreateEnvironmentActionInput = struct(
  n0,
  _CEAI,
  0,
  [_dI, _eInv, _n, _par, _de],
  [[0, 1], [0, 1], 0, () => ActionParameters, 0]
);
export var CreateEnvironmentActionOutput = struct(
  n0,
  _CEAO,
  0,
  [_dIo, _eInvi, _id, _n, _par, _de],
  [0, 0, 0, 0, () => ActionParameters, 0]
);
export var EnvironmentActionSummary = struct(
  n0,
  _EAS,
  0,
  [_dIo, _eInvi, _id, _n, _par, _de],
  [0, 0, 0, 0, () => ActionParameters, 0]
);
export var GetEnvironmentActionInput = struct(
  n0,
  _GEAI,
  0,
  [_dI, _eInv, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentActionOutput = struct(
  n0,
  _GEAO,
  0,
  [_dIo, _eInvi, _id, _n, _par, _de],
  [0, 0, 0, 0, () => ActionParameters, 0]
);
export var ListEnvironmentActionsInput = struct(
  n0,
  _LEAI,
  0,
  [_dI, _eInv, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
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
export var ListEnvironmentActionsOutput = struct(n0, _LEAO, 0, [_it, _nT], [() => ListEnvironmentActionSummaries, 0]);
export var UpdateEnvironmentActionInput = struct(
  n0,
  _UEAI,
  0,
  [_dI, _eInv, _i, _par, _n, _de],
  [[0, 1], [0, 1], [0, 1], () => ActionParameters, 0, 0]
);
export var UpdateEnvironmentActionOutput = struct(
  n0,
  _UEAO,
  0,
  [_dIo, _eInvi, _id, _n, _par, _de],
  [0, 0, 0, 0, () => ActionParameters, 0]
);
export var ListEnvironmentActionSummaries = list(n0, _LEAS, 0, () => EnvironmentActionSummary);
export var ActionParameters = uni(n0, _AP, 0, [_aCL], [() => AwsConsoleLinkParameters]);
export var CreateEnvironmentAction = op(
  n0,
  _CEAr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions", 201],
  },
  () => CreateEnvironmentActionInput,
  () => CreateEnvironmentActionOutput
);
export var GetEnvironmentAction = op(
  n0,
  _GEA,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}", 200],
  },
  () => GetEnvironmentActionInput,
  () => GetEnvironmentActionOutput
);
export var ListEnvironmentActions = op(
  n0,
  _LEA,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions", 200],
  },
  () => ListEnvironmentActionsInput,
  () => ListEnvironmentActionsOutput
);
export var UpdateEnvironmentAction = op(
  n0,
  _UEA,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}", 200],
  },
  () => UpdateEnvironmentActionInput,
  () => UpdateEnvironmentActionOutput
);
