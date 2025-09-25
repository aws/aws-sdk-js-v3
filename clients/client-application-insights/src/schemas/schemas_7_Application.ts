// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  TagsAlreadyExistException as __TagsAlreadyExistException,
} from "../models/index";
import {
  _ACE,
  _ACu,
  _ADE,
  _AI,
  _AIc,
  _AIL,
  _AMP,
  _aQE,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CWEME,
  _DAe,
  _DARes,
  _DAResc,
  _DT,
  _e,
  _GT,
  _hE,
  _LA,
  _LAR,
  _LARi,
  _LC,
  _M,
  _MR,
  _NT,
  _OCE,
  _OISNSTA,
  _R,
  _RGN,
  _RSNST,
  _SNSNA,
  _Ta,
  _TAEE,
  _UA,
  _UAR,
  _UARp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_6_Resource";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDeniedException`, 403],
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var ApplicationInfo = struct(
  n0,
  _AI,
  0,
  [_AIc, _RGN, _LC, _OISNSTA, _SNSNA, _OCE, _CWEME, _R, _ACE, _DT, _AMP],
  [0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 2]
);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_RGN, _OCE, _CWEME, _OISNSTA, _SNSNA, _Ta, _ACE, _ACu, _GT, _AMP],
  [0, 2, 2, 0, 0, () => TagList, 2, 2, 0, 2]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_AI], [() => ApplicationInfo]);
export var DescribeApplicationRequest = struct(n0, _DARes, 0, [_RGN, _AIc], [0, 0]);
export var DescribeApplicationResponse = struct(n0, _DAResc, 0, [_AI], [() => ApplicationInfo]);
export var ListApplicationsRequest = struct(n0, _LAR, 0, [_MR, _NT, _AIc], [1, 0, 0]);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_AIL, _NT], [() => ApplicationInfoList, 0]);
export var TagsAlreadyExistException = error(
  n0,
  _TAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TagsAlreadyExistException
);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_RGN, _OCE, _CWEME, _OISNSTA, _SNSNA, _RSNST, _ACE, _AMP],
  [0, 2, 2, 0, 0, 2, 2, 2]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [_AI], [() => ApplicationInfo]);
export var ApplicationInfoList = list(n0, _AIL, 0, () => ApplicationInfo);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var DescribeApplication = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationRequest,
  () => DescribeApplicationResponse
);
export var ListApplications = op(
  n0,
  _LA,
  0,
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
