// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBInstanceNotReadyFault as __DBInstanceNotReadyFault,
  DBLogFileNotFoundFault as __DBLogFileNotFoundFault,
} from "../models/index";
import {
  _ADP,
  _aQE,
  _c,
  _DBII,
  _DBINRF,
  _DBLFNFF,
  _DDBLF,
  _DDBLFD,
  _DDBLFL,
  _DDBLFM,
  _DDBLFP,
  _DDBLFPD,
  _DDBLFPM,
  _DDBLFR,
  _e,
  _FC,
  _Fi,
  _FLW,
  _FS,
  _hE,
  _LFD,
  _LFN,
  _LW,
  _m,
  _Ma,
  _MR,
  _NOL,
  _s,
  _Si,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBInstanceNotReadyFault = error(
  n0,
  _DBINRF,
  {
    [_e]: _s,
    [_hE]: 503,
    [_aQE]: [`DBInstanceNotReady`, 503],
  },
  [_m],
  [0],

  __DBInstanceNotReadyFault
);
export var DBLogFileNotFoundFault = error(
  n0,
  _DBLFNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBLogFileNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBLogFileNotFoundFault
);
export var DescribeDBLogFilesDetails = struct(n0, _DDBLFD, 0, [_LFN, _LW, _Si], [0, 1, 1]);
export var DescribeDBLogFilesMessage = struct(
  n0,
  _DDBLFM,
  0,
  [_DBII, _FC, _FLW, _FS, _Fi, _MR, _Ma],
  [0, 0, 1, 1, [() => FilterList, 0], 1, 0]
);
export var DescribeDBLogFilesResponse = struct(n0, _DDBLFR, 0, [_DDBLF, _Ma], [[() => DescribeDBLogFilesList, 0], 0]);
export var DownloadDBLogFilePortionDetails = struct(n0, _DDBLFPD, 0, [_LFD, _Ma, _ADP], [0, 0, 2]);
export var DownloadDBLogFilePortionMessage = struct(n0, _DDBLFPM, 0, [_DBII, _LFN, _Ma, _NOL], [0, 0, 0, 1]);
export var DescribeDBLogFilesList = list(n0, _DDBLFL, 0, [
  () => DescribeDBLogFilesDetails,
  {
    [_xN]: _DDBLFD,
  },
]);
export var DescribeDBLogFiles = op(
  n0,
  _DDBLF,
  0,
  () => DescribeDBLogFilesMessage,
  () => DescribeDBLogFilesResponse
);
export var DownloadDBLogFilePortion = op(
  n0,
  _DDBLFP,
  0,
  () => DownloadDBLogFilePortionMessage,
  () => DownloadDBLogFilePortionDetails
);
