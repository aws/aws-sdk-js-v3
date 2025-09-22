// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ContinuousBackupsUnavailableException as __ContinuousBackupsUnavailableException,
  ExportConflictException as __ExportConflictException,
  InvalidExportTimeException as __InvalidExportTimeException,
  PointInTimeRecoveryUnavailableException as __PointInTimeRecoveryUnavailableException,
  TableNotFoundException as __TableNotFoundException,
} from "../models/index";
import {
  _c,
  _CBD,
  _CBS,
  _CBUE,
  _CT,
  _DCB,
  _DCBI,
  _DCBO,
  _e,
  _ECE,
  _ED,
  _EF,
  _ERDT,
  _ETTPIT,
  _ETTPITI,
  _ETTPITO,
  _ETx,
  _ETxp,
  _IES,
  _IETE,
  _LRDT,
  _m,
  _PITRD,
  _PITRS,
  _PITRUE,
  _RPID,
  _SB,
  _SBO,
  _SPr,
  _SSA,
  _SSKKI,
  _TA,
  _TN,
  _TNFE,
  n0,
} from "./schemas_0";
import { ExportDescription, IncrementalExportSpecification } from "./schemas_4_Import";

/* eslint no-var: 0 */

export var ContinuousBackupsDescription = struct(
  n0,
  _CBD,
  0,
  [_CBS, _PITRD],
  [0, () => PointInTimeRecoveryDescription]
);
export var ContinuousBackupsUnavailableException = error(
  n0,
  _CBUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ContinuousBackupsUnavailableException
);
export var DescribeContinuousBackupsInput = struct(n0, _DCBI, 0, [_TN], [0]);
export var DescribeContinuousBackupsOutput = struct(n0, _DCBO, 0, [_CBD], [() => ContinuousBackupsDescription]);
export var ExportConflictException = error(
  n0,
  _ECE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExportConflictException
);
export var ExportTableToPointInTimeInput = struct(
  n0,
  _ETTPITI,
  0,
  [_TA, _ETx, _CT, _SB, _SBO, _SPr, _SSA, _SSKKI, _EF, _ETxp, _IES],
  [0, 4, [0, 4], 0, 0, 0, 0, 0, 0, 0, () => IncrementalExportSpecification]
);
export var ExportTableToPointInTimeOutput = struct(n0, _ETTPITO, 0, [_ED], [() => ExportDescription]);
export var InvalidExportTimeException = error(
  n0,
  _IETE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidExportTimeException
);
export var PointInTimeRecoveryDescription = struct(n0, _PITRD, 0, [_PITRS, _RPID, _ERDT, _LRDT], [0, 1, 4, 4]);
export var PointInTimeRecoveryUnavailableException = error(
  n0,
  _PITRUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PointInTimeRecoveryUnavailableException
);
export var TableNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TableNotFoundException
);
export var DescribeContinuousBackups = op(
  n0,
  _DCB,
  0,
  () => DescribeContinuousBackupsInput,
  () => DescribeContinuousBackupsOutput
);
export var ExportTableToPointInTime = op(
  n0,
  _ETTPIT,
  0,
  () => ExportTableToPointInTimeInput,
  () => ExportTableToPointInTimeOutput
);
