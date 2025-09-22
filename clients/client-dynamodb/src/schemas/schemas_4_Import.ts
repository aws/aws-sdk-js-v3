// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ExportNotFoundException as __ExportNotFoundException } from "../models/index";
import {
  _BSBi,
  _c,
  _CT,
  _CWLGA,
  _DEe,
  _DEI,
  _DEO,
  _e,
  _EA,
  _ED,
  _EF,
  _EFT,
  _EM,
  _ENFE,
  _ES,
  _ET,
  _ETT,
  _ETx,
  _ETxp,
  _EVT,
  _FC,
  _FM,
  _IA,
  _IC,
  _IES,
  _IF,
  _ISL,
  _ISm,
  _ISmp,
  _LI,
  _LII,
  _LIO,
  _m,
  _NT,
  _PS,
  _SB,
  _SBO,
  _SBS,
  _SKP,
  _SPr,
  _SSA,
  _SSKKI,
  _ST,
  _TA,
  _TI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeExportInput = struct(n0, _DEI, 0, [_EA], [0]);
export var DescribeExportOutput = struct(n0, _DEO, 0, [_ED], [() => ExportDescription]);
export var ExportDescription = struct(
  n0,
  _ED,
  0,
  [_EA, _ES, _ST, _ET, _EM, _TA, _TI, _ETx, _CT, _SB, _SBO, _SPr, _SSA, _SSKKI, _FC, _FM, _EF, _BSBi, _IC, _ETxp, _IES],
  [0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, () => IncrementalExportSpecification]
);
export var ExportNotFoundException = error(
  n0,
  _ENFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExportNotFoundException
);
export var ImportSummary = struct(
  n0,
  _ISm,
  0,
  [_IA, _ISmp, _TA, _SBS, _CWLGA, _IF, _ST, _ET],
  [0, 0, 0, () => S3BucketSource, 0, 0, 4, 4]
);
export var IncrementalExportSpecification = struct(n0, _IES, 0, [_EFT, _ETT, _EVT], [4, 4, 0]);
export var ListImportsInput = struct(n0, _LII, 0, [_TA, _PS, _NT], [0, 1, 0]);
export var ListImportsOutput = struct(n0, _LIO, 0, [_ISL, _NT], [() => ImportSummaryList, 0]);
export var S3BucketSource = struct(n0, _SBS, 0, [_SBO, _SB, _SKP], [0, 0, 0]);
export var ImportSummaryList = list(n0, _ISL, 0, () => ImportSummary);
export var DescribeExport = op(
  n0,
  _DEe,
  0,
  () => DescribeExportInput,
  () => DescribeExportOutput
);
export var ListImports = op(
  n0,
  _LI,
  0,
  () => ListImportsInput,
  () => ListImportsOutput
);
