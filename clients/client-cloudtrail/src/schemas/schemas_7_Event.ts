// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ChannelAlreadyExistsException as __ChannelAlreadyExistsException,
  InvalidEventDataStoreCategoryException as __InvalidEventDataStoreCategoryException,
} from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CA,
  _CAEE,
  _CKS,
  _CKSo,
  _D,
  _E,
  _e,
  _EDS,
  _EDSA,
  _GEC,
  _GECR,
  _GECRe,
  _hE,
  _IEDSCE,
  _M,
  _MES,
  _N,
  _S,
  _SEDSI,
  _SEDSIR,
  _SEDSIRt,
  _SEDSIRto,
  _SEDSIRtop,
  _SEDSIt,
  _T,
  _UC,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";
import { Destinations } from "./schemas_20_Channel";

/* eslint no-var: 0 */

export var ChannelAlreadyExistsException = error(
  n0,
  _CAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ChannelAlreadyExists`, 400],
  },
  [_M],
  [0],

  __ChannelAlreadyExistsException
);
export var ContextKeySelector = struct(n0, _CKS, 0, [_T, _E], [0, 64 | 0]);
export var GetEventConfigurationRequest = struct(n0, _GECR, 0, [_EDS], [0]);
export var GetEventConfigurationResponse = struct(
  n0,
  _GECRe,
  0,
  [_EDSA, _MES, _CKSo],
  [0, 0, () => ContextKeySelectors]
);
export var InvalidEventDataStoreCategoryException = error(
  n0,
  _IEDSCE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidEventDataStoreCategory`, 400],
  },
  [_M],
  [0],

  __InvalidEventDataStoreCategoryException
);
export var StartEventDataStoreIngestionRequest = struct(n0, _SEDSIR, 0, [_EDS], [0]);
export var StartEventDataStoreIngestionResponse = struct(n0, _SEDSIRt, 0, [], []);
export var StopEventDataStoreIngestionRequest = struct(n0, _SEDSIRto, 0, [_EDS], [0]);
export var StopEventDataStoreIngestionResponse = struct(n0, _SEDSIRtop, 0, [], []);
export var UpdateChannelRequest = struct(n0, _UCR, 0, [_C, _D, _N], [0, () => Destinations, 0]);
export var UpdateChannelResponse = struct(n0, _UCRp, 0, [_CA, _N, _S, _D], [0, 0, 0, () => Destinations]);
export var ContextKeySelectors = list(n0, _CKSo, 0, () => ContextKeySelector);
export var OperatorTargetList = 64 | 0;

export var GetEventConfiguration = op(
  n0,
  _GEC,
  2,
  () => GetEventConfigurationRequest,
  () => GetEventConfigurationResponse
);
export var StartEventDataStoreIngestion = op(
  n0,
  _SEDSI,
  0,
  () => StartEventDataStoreIngestionRequest,
  () => StartEventDataStoreIngestionResponse
);
export var StopEventDataStoreIngestion = op(
  n0,
  _SEDSIt,
  0,
  () => StopEventDataStoreIngestionRequest,
  () => StopEventDataStoreIngestionResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  2,
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
