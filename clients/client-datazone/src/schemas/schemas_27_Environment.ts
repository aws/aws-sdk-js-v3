// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _cF,
  _CFP,
  _de,
  _dI,
  _EBS,
  _EBSn,
  _hQ,
  _ht,
  _id,
  _it,
  _LEB,
  _LEBI,
  _LEBO,
  _ma,
  _mRa,
  _n,
  _nT,
  _PP,
  _pP,
  _pro,
  _tU,
  _uA,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFormationProperties = struct(n0, _CFP, 0, [_tU], [0]);
export var EnvironmentBlueprintSummary = struct(
  n0,
  _EBS,
  0,
  [_id, _n, _de, _pro, _pP, _cA, _uA],
  [0, 0, [() => Description, 0], 0, () => ProvisioningProperties, 5, 5]
);
export var ListEnvironmentBlueprintsInput = struct(
  n0,
  _LEBI,
  0,
  [_dI, _mRa, _nT, _n, _ma],
  [
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
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      2,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListEnvironmentBlueprintsOutput = struct(
  n0,
  _LEBO,
  0,
  [_it, _nT],
  [[() => EnvironmentBlueprintSummaries, 0], 0]
);
export var EnvironmentBlueprintSummaries = list(n0, _EBSn, 0, [() => EnvironmentBlueprintSummary, 0]);
export var ProvisioningProperties = uni(n0, _PP, 0, [_cF], [() => CloudFormationProperties]);
export var ListEnvironmentBlueprints = op(
  n0,
  _LEB,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environment-blueprints", 200],
  },
  () => ListEnvironmentBlueprintsInput,
  () => ListEnvironmentBlueprintsOutput
);
