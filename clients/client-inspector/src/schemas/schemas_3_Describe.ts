// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AATF,
  _AATFR,
  _AATFRd,
  _aK,
  _ar,
  _DE,
  _de,
  _DER,
  _DERe,
  _DRP,
  _DRPR,
  _DRPRe,
  _E,
  _eA,
  _EM,
  _ex,
  _fA,
  _fCa,
  _FI,
  _fI,
  _FID,
  _l,
  _n,
  _p,
  _r,
  _RAFF,
  _RAFFR,
  _RAFFRe,
  _re,
  _RP,
  _rP,
  _rPA,
  _RPL,
  _sc,
  _ti,
  _ve,
  n0,
} from "./schemas_0";
import { AttributeList, ScopeList, UserAttributeList } from "./schemas_9_Describe";

/* eslint no-var: 0 */

export var AddAttributesToFindingsRequest = struct(n0, _AATFR, 0, [_fA, _a], [64 | 0, () => UserAttributeList]);
export var AddAttributesToFindingsResponse = struct(n0, _AATFRd, 0, [_fI], [() => FailedItems]);
export var DescribeExclusionsRequest = struct(n0, _DER, 0, [_eA, _l], [64 | 0, 0]);
export var DescribeExclusionsResponse = struct(n0, _DERe, 0, [_ex, _fI], [() => ExclusionMap, () => FailedItems]);
export var DescribeRulesPackagesRequest = struct(n0, _DRPR, 0, [_rPA, _l], [64 | 0, 0]);
export var DescribeRulesPackagesResponse = struct(
  n0,
  _DRPRe,
  0,
  [_rP, _fI],
  [() => RulesPackageList, () => FailedItems]
);
export var Exclusion = struct(
  n0,
  _E,
  0,
  [_ar, _ti, _de, _r, _sc, _a],
  [0, 0, 0, 0, () => ScopeList, () => AttributeList]
);
export var FailedItemDetails = struct(n0, _FID, 0, [_fCa, _re], [0, 2]);
export var RemoveAttributesFromFindingsRequest = struct(n0, _RAFFR, 0, [_fA, _aK], [64 | 0, 64 | 0]);
export var RemoveAttributesFromFindingsResponse = struct(n0, _RAFFRe, 0, [_fI], [() => FailedItems]);
export var RulesPackage = struct(n0, _RP, 0, [_ar, _n, _ve, _p, _de], [0, 0, 0, 0, 0]);
export var AddRemoveAttributesFindingArnList = 64 | 0;

export var BatchDescribeArnList = 64 | 0;

export var BatchDescribeExclusionsArnList = 64 | 0;

export var RulesPackageList = list(n0, _RPL, 0, () => RulesPackage);
export var UserAttributeKeyList = 64 | 0;

export var ExclusionMap = map(n0, _EM, 0, 0, () => Exclusion);
export var FailedItems = map(n0, _FI, 0, 0, () => FailedItemDetails);
export var AddAttributesToFindings = op(
  n0,
  _AATF,
  0,
  () => AddAttributesToFindingsRequest,
  () => AddAttributesToFindingsResponse
);
export var DescribeExclusions = op(
  n0,
  _DE,
  0,
  () => DescribeExclusionsRequest,
  () => DescribeExclusionsResponse
);
export var DescribeRulesPackages = op(
  n0,
  _DRP,
  0,
  () => DescribeRulesPackagesRequest,
  () => DescribeRulesPackagesResponse
);
export var RemoveAttributesFromFindings = op(
  n0,
  _RAFF,
  0,
  () => RemoveAttributesFromFindingsRequest,
  () => RemoveAttributesFromFindingsResponse
);
