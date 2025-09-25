// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CGP,
  _CGPI,
  _CGPO,
  _cT,
  _dI,
  _dIo,
  _GGP,
  _GGPI,
  _GGPO,
  _gIr,
  _gN,
  _ht,
  _id,
  _s,
  _UGP,
  _UGPI,
  _UGPO,
  n0,
} from "./schemas_0";
import { GroupProfileName } from "./schemas_42_Group";

/* eslint no-var: 0 */

export var CreateGroupProfileInput = struct(n0, _CGPI, 0, [_dI, _gIr, _cT], [[0, 1], 0, [0, 4]]);
export var CreateGroupProfileOutput = struct(
  n0,
  _CGPO,
  0,
  [_dIo, _id, _s, _gN],
  [0, 0, 0, [() => GroupProfileName, 0]]
);
export var GetGroupProfileInput = struct(
  n0,
  _GGPI,
  0,
  [_dI, _gIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGroupProfileOutput = struct(n0, _GGPO, 0, [_dIo, _id, _s, _gN], [0, 0, 0, [() => GroupProfileName, 0]]);
export var UpdateGroupProfileInput = struct(n0, _UGPI, 0, [_dI, _gIr, _s], [[0, 1], [0, 1], 0]);
export var UpdateGroupProfileOutput = struct(
  n0,
  _UGPO,
  0,
  [_dIo, _id, _s, _gN],
  [0, 0, 0, [() => GroupProfileName, 0]]
);
export var CreateGroupProfile = op(
  n0,
  _CGP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/group-profiles", 201],
  },
  () => CreateGroupProfileInput,
  () => CreateGroupProfileOutput
);
export var GetGroupProfile = op(
  n0,
  _GGP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}", 200],
  },
  () => GetGroupProfileInput,
  () => GetGroupProfileOutput
);
export var UpdateGroupProfile = op(
  n0,
  _UGP,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}", 200],
  },
  () => UpdateGroupProfileInput,
  () => UpdateGroupProfileOutput
);
