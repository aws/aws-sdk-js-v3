// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aCI,
  _ACITA,
  _ACITAR,
  _ACITARs,
  _c,
  _cIo,
  _cT,
  _CTR,
  _CTr,
  _CTRr,
  _DCIFA,
  _DCIFAR,
  _DCIFARi,
  _DT,
  _DTR,
  _DTRe,
  _e,
  _hE,
  _i,
  _k,
  _LEE,
  _m,
  _SBDCT,
  _SBDCTR,
  _SBDCTRt,
  _T,
  _t,
  _tI,
  _TS,
  _va,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateConfigurationItemsToApplicationRequest = struct(n0, _ACITAR, 0, [_aCI, _cIo], [0, 64 | 0]);
export var AssociateConfigurationItemsToApplicationResponse = struct(n0, _ACITARs, 0, [], []);
export var CreateTagsRequest = struct(n0, _CTR, 0, [_cIo, _t], [64 | 0, [() => TagSet, 0]]);
export var CreateTagsResponse = struct(n0, _CTRr, 0, [], []);
export var DeleteTagsRequest = struct(n0, _DTR, 0, [_cIo, _t], [64 | 0, [() => TagSet, 0]]);
export var DeleteTagsResponse = struct(n0, _DTRe, 0, [], []);
export var DisassociateConfigurationItemsFromApplicationRequest = struct(n0, _DCIFAR, 0, [_aCI, _cIo], [0, 64 | 0]);
export var DisassociateConfigurationItemsFromApplicationResponse = struct(n0, _DCIFARi, 0, [], []);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var StartBatchDeleteConfigurationTaskRequest = struct(n0, _SBDCTR, 0, [_cT, _cIo], [0, 64 | 0]);
export var StartBatchDeleteConfigurationTaskResponse = struct(n0, _SBDCTRt, 0, [_tI], [0]);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var ConfigurationIdList = 64 | 0;

export var TagSet = list(n0, _TS, 0, [
  () => Tag,
  {
    [_xN]: _i,
  },
]);
export var AssociateConfigurationItemsToApplication = op(
  n0,
  _ACITA,
  0,
  () => AssociateConfigurationItemsToApplicationRequest,
  () => AssociateConfigurationItemsToApplicationResponse
);
export var CreateTags = op(
  n0,
  _CTr,
  0,
  () => CreateTagsRequest,
  () => CreateTagsResponse
);
export var DeleteTags = op(
  n0,
  _DT,
  0,
  () => DeleteTagsRequest,
  () => DeleteTagsResponse
);
export var DisassociateConfigurationItemsFromApplication = op(
  n0,
  _DCIFA,
  0,
  () => DisassociateConfigurationItemsFromApplicationRequest,
  () => DisassociateConfigurationItemsFromApplicationResponse
);
export var StartBatchDeleteConfigurationTask = op(
  n0,
  _SBDCT,
  0,
  () => StartBatchDeleteConfigurationTaskRequest,
  () => StartBatchDeleteConfigurationTaskResponse
);
