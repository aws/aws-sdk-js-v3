// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _CICA,
  _CICAR,
  _CICARr,
  _CMEJ,
  _CMEJR,
  _CMEJRa,
  _CT,
  _DD,
  _DICA,
  _DO,
  _DOR,
  _DORe,
  _FD,
  _IA,
  _JI,
  _N,
  _OI,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMailboxExportJobRequest = struct(n0, _CMEJR, 0, [_CT, _JI, _OI], [[0, 4], 0, 0]);
export var CancelMailboxExportJobResponse = struct(n0, _CMEJRa, 0, [], []);
export var CreateIdentityCenterApplicationRequest = struct(n0, _CICAR, 0, [_N, _IA, _CT], [0, 0, [0, 4]]);
export var CreateIdentityCenterApplicationResponse = struct(n0, _CICARr, 0, [_AA], [0]);
export var DeleteOrganizationRequest = struct(n0, _DOR, 0, [_CT, _OI, _DD, _FD, _DICA], [[0, 4], 0, 2, 2, 2]);
export var DeleteOrganizationResponse = struct(n0, _DORe, 0, [_OI, _S], [0, 0]);
export var CancelMailboxExportJob = op(
  n0,
  _CMEJ,
  2,
  () => CancelMailboxExportJobRequest,
  () => CancelMailboxExportJobResponse
);
export var CreateIdentityCenterApplication = op(
  n0,
  _CICA,
  2,
  () => CreateIdentityCenterApplicationRequest,
  () => CreateIdentityCenterApplicationResponse
);
export var DeleteOrganization = op(
  n0,
  _DO,
  2,
  () => DeleteOrganizationRequest,
  () => DeleteOrganizationResponse
);
