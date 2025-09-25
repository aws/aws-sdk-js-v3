// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CredentialReportExpiredException as __CredentialReportExpiredException,
  CredentialReportNotPresentException as __CredentialReportNotPresentException,
  CredentialReportNotReadyException as __CredentialReportNotReadyException,
} from "../models/index";
import { _aQE, _c, _Co, _CREE, _CRNPE, _CRNRE, _e, _GCRe, _GCRRe, _GT, _hE, _m, _RF, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CredentialReportExpiredException = error(
  n0,
  _CREE,
  {
    [_e]: _c,
    [_hE]: 410,
    [_aQE]: [`ReportExpired`, 410],
  },
  [_m],
  [0],

  __CredentialReportExpiredException
);
export var CredentialReportNotPresentException = error(
  n0,
  _CRNPE,
  {
    [_e]: _c,
    [_hE]: 410,
    [_aQE]: [`ReportNotPresent`, 410],
  },
  [_m],
  [0],

  __CredentialReportNotPresentException
);
export var CredentialReportNotReadyException = error(
  n0,
  _CRNRE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReportInProgress`, 404],
  },
  [_m],
  [0],

  __CredentialReportNotReadyException
);
export var GetCredentialReportResponse = struct(n0, _GCRRe, 0, [_Co, _RF, _GT], [21, 0, 4]);
export var GetCredentialReport = op(
  n0,
  _GCRe,
  0,
  () => Unit,
  () => GetCredentialReportResponse
);
