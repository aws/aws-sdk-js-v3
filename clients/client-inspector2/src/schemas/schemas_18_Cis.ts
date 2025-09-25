// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIFL,
  _CNF,
  _CNFL,
  _fa,
  _GCSR,
  _GCSRR,
  _GCSRRe,
  _ht,
  _lI,
  _pas,
  _PFLl,
  _rF,
  _s,
  _sAc,
  _SCt,
  _sk,
  _tA,
  _u,
  _uI,
  n0,
} from "./schemas_0";
import { CisStringFilter } from "./schemas_35_Cis";

/* eslint no-var: 0 */

export var CisNumberFilter = struct(n0, _CNF, 0, [_uI, _lI], [1, 1]);
export var GetCisScanReportRequest = struct(n0, _GCSRR, 0, [_sAc, _tA, _rF], [0, 64 | 0, 0]);
export var GetCisScanReportResponse = struct(n0, _GCSRRe, 0, [_u, _s], [0, 0]);
export var StatusCounts = struct(n0, _SCt, 0, [_fa, _sk, _pas], [1, 1, 1]);
export var CheckIdFilterList = list(n0, _CIFL, 0, () => CisStringFilter);
export var CisNumberFilterList = list(n0, _CNFL, 0, () => CisNumberFilter);
export var PlatformFilterList = list(n0, _PFLl, 0, () => CisStringFilter);
export var ReportTargetAccounts = 64 | 0;

export var GetCisScanReport = op(
  n0,
  _GCSR,
  {
    [_ht]: ["POST", "/cis/scan/report/get", 200],
  },
  () => GetCisScanReportRequest,
  () => GetCisScanReportResponse
);
