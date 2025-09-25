// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _cod,
  _de,
  _dI,
  _dIo,
  _dUI,
  _FR,
  _fR,
  _gIr,
  _hQ,
  _ht,
  _id,
  _it,
  _LP,
  _LPI,
  _LPO,
  _m,
  _mRa,
  _n,
  _nT,
  _PDE,
  _pS,
  _PSr,
  _PSro,
  _uA,
  _uI,
  Description,
  n0,
  ProjectName,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProjectsInput = struct(
  n0,
  _LPI,
  0,
  [_dI, _uI, _gIr, _n, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _gIr,
      },
    ],
    [
      () => ProjectName,
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
export var ListProjectsOutput = struct(n0, _LPO, 0, [_it, _nT], [[() => ProjectSummaries, 0], 0]);
export var ProjectDeletionError = struct(n0, _PDE, 0, [_cod, _m], [0, 0]);
export var ProjectSummary = struct(
  n0,
  _PSr,
  0,
  [_dIo, _id, _n, _de, _pS, _fR, _cB, _cA, _uA, _dUI],
  [0, 0, [() => ProjectName, 0], [() => Description, 0], 0, () => FailureReasons, 0, 5, 5, 0]
);
export var FailureReasons = list(n0, _FR, 0, () => ProjectDeletionError);
export var ProjectSummaries = list(n0, _PSro, 0, [() => ProjectSummary, 0]);
export var ListProjects = op(
  n0,
  _LP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/projects", 200],
  },
  () => ListProjectsInput,
  () => ListProjectsOutput
);
