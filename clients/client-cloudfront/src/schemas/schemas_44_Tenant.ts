// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAe,
  _CS,
  _Dom,
  _GMCD,
  _GMCDR,
  _GMCDRe,
  _h,
  _Ide,
  _MCD,
  _RF,
  _RTed,
  _VTD,
  _VTDa,
  _VTDL,
  _VTH,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetManagedCertificateDetailsRequest = struct(n0, _GMCDR, 0, [_Ide], [[0, 1]]);
export var GetManagedCertificateDetailsResult = struct(n0, _GMCDRe, 0, [_MCD], [[() => ManagedCertificateDetails, 16]]);
export var ManagedCertificateDetails = struct(
  n0,
  _MCD,
  0,
  [_CAe, _CS, _VTH, _VTD],
  [0, 0, 0, () => ValidationTokenDetailList]
);
export var ValidationTokenDetail = struct(n0, _VTDa, 0, [_Dom, _RTed, _RF], [0, 0, 0]);
export var ValidationTokenDetailList = list(n0, _VTDL, 0, () => ValidationTokenDetail);
export var GetManagedCertificateDetails = op(
  n0,
  _GMCD,
  {
    [_h]: ["GET", "/2020-05-31/managed-certificate/{Identifier}", 200],
  },
  () => GetManagedCertificateDetailsRequest,
  () => GetManagedCertificateDetailsResult
);
