// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AU,
  _CS,
  _CSD,
  _CSN,
  _D,
  _DBED,
  _DBEV,
  _DBEVD,
  _DBEVL,
  _DBEVM,
  _DBEVn,
  _DBPGF,
  _DCS,
  _DDBEV,
  _DDBEVM,
  _DO,
  _ELTx,
  _En,
  _EV,
  _F,
  _IMVU,
  _LSCS,
  _LST,
  _M,
  _MR,
  _SCS,
  _SCSL,
  _SGD,
  _SLETCL,
  _SRR,
  _STL,
  _STu,
  _Ti,
  _TN,
  _UT,
  _VUT,
  _VUTL,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CharacterSet = struct(n0, _CS, 0, [_CSN, _CSD], [0, 0]);
export var DBEngineVersion = struct(
  n0,
  _DBEV,
  0,
  [_En, _EV, _DBPGF, _DBED, _DBEVD, _DCS, _SCS, _VUT, _STu, _ELTx, _SLETCL, _SRR, _SGD],
  [
    0,
    0,
    0,
    0,
    0,
    () => CharacterSet,
    [() => SupportedCharacterSetsList, 0],
    [() => ValidUpgradeTargetList, 0],
    [() => SupportedTimezonesList, 0],
    64 | 0,
    2,
    2,
    2,
  ]
);
export var DBEngineVersionMessage = struct(n0, _DBEVM, 0, [_M, _DBEVn], [0, [() => DBEngineVersionList, 0]]);
export var DescribeDBEngineVersionsMessage = struct(
  n0,
  _DDBEVM,
  0,
  [_En, _EV, _DBPGF, _F, _MR, _M, _DO, _LSCS, _LST],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2, 2]
);
export var Timezone = struct(n0, _Ti, 0, [_TN], [0]);
export var UpgradeTarget = struct(n0, _UT, 0, [_En, _EV, _D, _AU, _IMVU, _SGD], [0, 0, 0, 2, 2, 2]);
export var DBEngineVersionList = list(n0, _DBEVL, 0, [
  () => DBEngineVersion,
  {
    [_xN]: _DBEV,
  },
]);
export var SupportedCharacterSetsList = list(n0, _SCSL, 0, [
  () => CharacterSet,
  {
    [_xN]: _CS,
  },
]);
export var SupportedTimezonesList = list(n0, _STL, 0, [
  () => Timezone,
  {
    [_xN]: _Ti,
  },
]);
export var ValidUpgradeTargetList = list(n0, _VUTL, 0, [
  () => UpgradeTarget,
  {
    [_xN]: _UT,
  },
]);
export var DescribeDBEngineVersions = op(
  n0,
  _DDBEV,
  0,
  () => DescribeDBEngineVersionsMessage,
  () => DBEngineVersionMessage
);
