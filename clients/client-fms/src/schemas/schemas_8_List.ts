// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _CV,
  _CVo,
  _D,
  _Da,
  _EA,
  _ELE,
  _ETn,
  _GCD,
  _GCDR,
  _GCDRe,
  _GPS,
  _GPSR,
  _GPSRe,
  _GRS,
  _GRSR,
  _GRSRe,
  _Id,
  _Id_,
  _IIM,
  _LRS,
  _LRSR,
  _LRSRi,
  _LUTa,
  _M,
  _MA,
  _MAI,
  _MR,
  _N,
  _NT,
  _PCD,
  _PI,
  _PO,
  _PRS,
  _PRSR,
  _PRSRu,
  _RI,
  _RSA,
  _RSe,
  _RSes,
  _RSS,
  _RSSe,
  _RSSL,
  _RT,
  _RTL,
  _ST,
  _STe,
  _TL,
  _UT,
  _Vi,
  _VR,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var ComplianceViolator = struct(n0, _CV, 0, [_RI, _VR, _RT, _M], [0, 0, 0, 128 | 0]);
export var GetComplianceDetailRequest = struct(n0, _GCDR, 0, [_PI, _MA], [0, 0]);
export var GetComplianceDetailResponse = struct(n0, _GCDRe, 0, [_PCD], [() => PolicyComplianceDetail]);
export var GetProtectionStatusRequest = struct(n0, _GPSR, 0, [_PI, _MAI, _ST, _ETn, _NT, _MR], [0, 0, 4, 4, 0, 1]);
export var GetProtectionStatusResponse = struct(n0, _GPSRe, 0, [_AAI, _STe, _Da, _NT], [0, 0, 0, 0]);
export var GetResourceSetRequest = struct(n0, _GRSR, 0, [_Id], [0]);
export var GetResourceSetResponse = struct(n0, _GRSRe, 0, [_RSe, _RSA], [() => ResourceSet, 0]);
export var ListResourceSetsRequest = struct(n0, _LRSR, 0, [_NT, _MR], [0, 1]);
export var ListResourceSetsResponse = struct(n0, _LRSRi, 0, [_RSes, _NT], [() => ResourceSetSummaryList, 0]);
export var PolicyComplianceDetail = struct(
  n0,
  _PCD,
  0,
  [_PO, _PI, _MA, _Vi, _ELE, _EA, _IIM],
  [0, 0, 0, () => ComplianceViolators, 2, 4, 128 | 0]
);
export var PutResourceSetRequest = struct(n0, _PRSR, 0, [_RSe, _TL], [() => ResourceSet, () => TagList]);
export var PutResourceSetResponse = struct(n0, _PRSRu, 0, [_RSe, _RSA], [() => ResourceSet, 0]);
export var ResourceSet = struct(n0, _RSe, 0, [_Id_, _N, _D, _UT, _RTL, _LUTa, _RSS], [0, 0, 0, 0, 64 | 0, 4, 0]);
export var ResourceSetSummary = struct(n0, _RSSe, 0, [_Id_, _N, _D, _LUTa, _RSS], [0, 0, 0, 4, 0]);
export var ComplianceViolators = list(n0, _CVo, 0, () => ComplianceViolator);
export var ResourceSetSummaryList = list(n0, _RSSL, 0, () => ResourceSetSummary);
export var ComplianceViolatorMetadata = 128 | 0;

export var IssueInfoMap = 128 | 0;

export var GetComplianceDetail = op(
  n0,
  _GCD,
  0,
  () => GetComplianceDetailRequest,
  () => GetComplianceDetailResponse
);
export var GetProtectionStatus = op(
  n0,
  _GPS,
  0,
  () => GetProtectionStatusRequest,
  () => GetProtectionStatusResponse
);
export var GetResourceSet = op(
  n0,
  _GRS,
  0,
  () => GetResourceSetRequest,
  () => GetResourceSetResponse
);
export var ListResourceSets = op(
  n0,
  _LRS,
  0,
  () => ListResourceSetsRequest,
  () => ListResourceSetsResponse
);
export var PutResourceSet = op(
  n0,
  _PRS,
  0,
  () => PutResourceSetRequest,
  () => PutResourceSetResponse
);
