// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _CG,
  _CGI,
  _CGO,
  _CGT,
  _CGTI,
  _CGTO,
  _cl,
  _cT,
  _de,
  _DG,
  _DGI,
  _DGO,
  _dI,
  _dIo,
  _GD,
  _GG,
  _GGI,
  _GGO,
  _GGT,
  _GGTI,
  _GGTO,
  _gIl,
  _gIlo,
  _GN,
  _ht,
  _i,
  _iA,
  _id,
  _LD,
  _lDo,
  _n,
  _oPI,
  _oPIw,
  _s,
  _sD,
  _TR,
  _tRe,
  _uA,
  _uB,
  _UG,
  _UGI,
  _UGO,
  _UGT,
  _UGTI,
  _UGTO,
  _uR,
  GlossaryTermName,
  n0,
  ShortDescription,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GlossaryDescription = sim(n0, _GD, 0, 8);
export var GlossaryName = sim(n0, _GN, 0, 8);
export var LongDescription = sim(n0, _LD, 0, 8);
export var CreateGlossaryInput = struct(
  n0,
  _CGI,
  0,
  [_dI, _n, _oPIw, _de, _s, _uR, _cT],
  [[0, 1], [() => GlossaryName, 0], 0, [() => GlossaryDescription, 0], 0, 64 | 0, [0, 4]]
);
export var CreateGlossaryOutput = struct(
  n0,
  _CGO,
  0,
  [_dIo, _id, _n, _oPI, _de, _s, _uR],
  [0, 0, [() => GlossaryName, 0], 0, [() => GlossaryDescription, 0], 0, 64 | 0]
);
export var CreateGlossaryTermInput = struct(
  n0,
  _CGTI,
  0,
  [_dI, _gIl, _n, _s, _sD, _lDo, _tRe, _cT],
  [
    [0, 1],
    0,
    [() => GlossaryTermName, 0],
    0,
    [() => ShortDescription, 0],
    [() => LongDescription, 0],
    () => TermRelations,
    [0, 4],
  ]
);
export var CreateGlossaryTermOutput = struct(
  n0,
  _CGTO,
  0,
  [_id, _dIo, _gIlo, _n, _s, _sD, _lDo, _tRe, _uR],
  [
    0,
    0,
    0,
    [() => GlossaryTermName, 0],
    0,
    [() => ShortDescription, 0],
    [() => LongDescription, 0],
    () => TermRelations,
    64 | 0,
  ]
);
export var DeleteGlossaryInput = struct(
  n0,
  _DGI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteGlossaryOutput = struct(n0, _DGO, 0, [], []);
export var GetGlossaryInput = struct(
  n0,
  _GGI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGlossaryOutput = struct(
  n0,
  _GGO,
  0,
  [_dIo, _id, _oPI, _n, _de, _s, _cA, _cB, _uA, _uB, _uR],
  [0, 0, 0, [() => GlossaryName, 0], [() => GlossaryDescription, 0], 0, 4, 0, 4, 0, 64 | 0]
);
export var GetGlossaryTermInput = struct(
  n0,
  _GGTI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGlossaryTermOutput = struct(
  n0,
  _GGTO,
  0,
  [_dIo, _gIlo, _id, _n, _sD, _lDo, _tRe, _s, _cA, _cB, _uA, _uB, _uR],
  [
    0,
    0,
    0,
    [() => GlossaryTermName, 0],
    [() => ShortDescription, 0],
    [() => LongDescription, 0],
    () => TermRelations,
    0,
    4,
    0,
    4,
    0,
    64 | 0,
  ]
);
export var TermRelations = struct(n0, _TR, 0, [_iA, _cl], [64 | 0, 64 | 0]);
export var UpdateGlossaryInput = struct(
  n0,
  _UGI,
  0,
  [_dI, _i, _n, _de, _s, _cT],
  [[0, 1], [0, 1], [() => GlossaryName, 0], [() => GlossaryDescription, 0], 0, [0, 4]]
);
export var UpdateGlossaryOutput = struct(
  n0,
  _UGO,
  0,
  [_dIo, _id, _n, _oPI, _de, _s, _uR],
  [0, 0, [() => GlossaryName, 0], 0, [() => GlossaryDescription, 0], 0, 64 | 0]
);
export var UpdateGlossaryTermInput = struct(
  n0,
  _UGTI,
  0,
  [_dI, _gIl, _i, _n, _sD, _lDo, _tRe, _s],
  [
    [0, 1],
    0,
    [0, 1],
    [() => GlossaryTermName, 0],
    [() => ShortDescription, 0],
    [() => LongDescription, 0],
    () => TermRelations,
    0,
  ]
);
export var UpdateGlossaryTermOutput = struct(
  n0,
  _UGTO,
  0,
  [_id, _dIo, _gIlo, _n, _s, _sD, _lDo, _tRe, _uR],
  [
    0,
    0,
    0,
    [() => GlossaryTermName, 0],
    0,
    [() => ShortDescription, 0],
    [() => LongDescription, 0],
    () => TermRelations,
    64 | 0,
  ]
);
export var GlossaryUsageRestrictions = 64 | 0;

export var CreateGlossary = op(
  n0,
  _CG,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/glossaries", 201],
  },
  () => CreateGlossaryInput,
  () => CreateGlossaryOutput
);
export var CreateGlossaryTerm = op(
  n0,
  _CGT,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/glossary-terms", 201],
  },
  () => CreateGlossaryTermInput,
  () => CreateGlossaryTermOutput
);
export var DeleteGlossary = op(
  n0,
  _DG,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/glossaries/{identifier}", 204],
  },
  () => DeleteGlossaryInput,
  () => DeleteGlossaryOutput
);
export var GetGlossary = op(
  n0,
  _GG,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/glossaries/{identifier}", 200],
  },
  () => GetGlossaryInput,
  () => GetGlossaryOutput
);
export var GetGlossaryTerm = op(
  n0,
  _GGT,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}", 200],
  },
  () => GetGlossaryTermInput,
  () => GetGlossaryTermOutput
);
export var UpdateGlossary = op(
  n0,
  _UG,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/glossaries/{identifier}", 200],
  },
  () => UpdateGlossaryInput,
  () => UpdateGlossaryOutput
);
export var UpdateGlossaryTerm = op(
  n0,
  _UGT,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}", 200],
  },
  () => UpdateGlossaryTermInput,
  () => UpdateGlossaryTermOutput
);
