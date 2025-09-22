// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aLI,
  _cDII,
  _d,
  _exc,
  _GSIT,
  _GSITR,
  _GSITRe,
  _h,
  _i,
  _inc,
  _jN,
  _mDII,
  _n,
  _SITE,
  _SITI,
  _sITI,
  _USIT,
  _USITR,
  _USITRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSensitivityInspectionTemplateRequest = struct(n0, _GSITR, 0, [_i], [[0, 1]]);
export var GetSensitivityInspectionTemplateResponse = struct(
  n0,
  _GSITRe,
  0,
  [_d, _exc, _inc, _n, _sITI],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => SensitivityInspectionTemplateExcludes,
      {
        [_jN]: _exc,
      },
    ],
    [
      () => SensitivityInspectionTemplateIncludes,
      {
        [_jN]: _inc,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sITI,
      },
    ],
  ]
);
export var SensitivityInspectionTemplateExcludes = struct(
  n0,
  _SITE,
  0,
  [_mDII],
  [
    [
      64 | 0,
      {
        [_jN]: _mDII,
      },
    ],
  ]
);
export var SensitivityInspectionTemplateIncludes = struct(
  n0,
  _SITI,
  0,
  [_aLI, _cDII, _mDII],
  [
    [
      64 | 0,
      {
        [_jN]: _aLI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cDII,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mDII,
      },
    ],
  ]
);
export var UpdateSensitivityInspectionTemplateRequest = struct(
  n0,
  _USITR,
  0,
  [_d, _exc, _i, _inc],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => SensitivityInspectionTemplateExcludes,
      {
        [_jN]: _exc,
      },
    ],
    [0, 1],
    [
      () => SensitivityInspectionTemplateIncludes,
      {
        [_jN]: _inc,
      },
    ],
  ]
);
export var UpdateSensitivityInspectionTemplateResponse = struct(n0, _USITRp, 0, [], []);
export var GetSensitivityInspectionTemplate = op(
  n0,
  _GSIT,
  {
    [_h]: ["GET", "/templates/sensitivity-inspections/{id}", 200],
  },
  () => GetSensitivityInspectionTemplateRequest,
  () => GetSensitivityInspectionTemplateResponse
);
export var UpdateSensitivityInspectionTemplate = op(
  n0,
  _USIT,
  {
    [_h]: ["PUT", "/templates/sensitivity-inspections/{id}", 200],
  },
  () => UpdateSensitivityInspectionTemplateRequest,
  () => UpdateSensitivityInspectionTemplateResponse
);
