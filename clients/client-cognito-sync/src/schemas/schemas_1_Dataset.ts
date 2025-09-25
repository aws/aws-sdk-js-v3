// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidConfigurationException as __InvalidConfigurationException,
  InvalidLambdaFunctionOutputException as __InvalidLambdaFunctionOutputException,
  LambdaThrottledException as __LambdaThrottledException,
  LimitExceededException as __LimitExceededException,
  ResourceConflictException as __ResourceConflictException,
} from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CC,
  _CD,
  _D,
  _Da,
  _DC,
  _DD,
  _DDARSC,
  _DDe,
  _DDR,
  _DDRe,
  _DDRes,
  _DDResc,
  _DE,
  _DI,
  _DIU,
  _DIUR,
  _DIURe,
  _DL,
  _DLMD,
  _DN,
  _DS,
  _DSC,
  _e,
  _h,
  _hE,
  _hH,
  _hQ,
  _ICE,
  _II,
  _ILFOE,
  _IPI,
  _IU,
  _K,
  _LD,
  _LDR,
  _LDRi,
  _LEE,
  _LMB,
  _LMD,
  _LR,
  _LRR,
  _LRRi,
  _LSC,
  _lSC,
  _LTE,
  _m,
  _MDN,
  _MR,
  _mR,
  _NR,
  _NT,
  _nT,
  _O,
  _P,
  _R,
  _RCE,
  _RD,
  _RDR,
  _RDRe,
  _Re,
  _RL,
  _RP,
  _RPe,
  _RPL,
  _SC,
  _SST,
  _sST,
  _STD,
  _STDR,
  _STDRu,
  _T,
  _UFD,
  _UFDR,
  _UFDRn,
  _UR,
  _URR,
  _URRp,
  _V,
  _xaCC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Dataset = struct(n0, _D, 0, [_II, _DN, _CD, _LMD, _LMB, _DS, _NR], [0, 0, 4, 4, 0, 1, 1]);
export var DeleteDatasetRequest = struct(
  n0,
  _DDR,
  0,
  [_IPI, _II, _DN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDatasetResponse = struct(n0, _DDRe, 0, [_D], [() => Dataset]);
export var DescribeDatasetRequest = struct(
  n0,
  _DDRes,
  0,
  [_IPI, _II, _DN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDatasetResponse = struct(n0, _DDResc, 0, [_D], [() => Dataset]);
export var DescribeIdentityUsageRequest = struct(
  n0,
  _DIUR,
  0,
  [_IPI, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeIdentityUsageResponse = struct(n0, _DIURe, 0, [_IU], [() => IdentityUsage]);
export var IdentityUsage = struct(n0, _IU, 0, [_II, _IPI, _LMD, _DC, _DS], [0, 0, 4, 1, 1]);
export var InvalidConfigurationException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidConfiguration`, 400],
  },
  [_m],
  [0],

  __InvalidConfigurationException
);
export var InvalidLambdaFunctionOutputException = error(
  n0,
  _ILFOE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidLambdaFunctionOutput`, 400],
  },
  [_m],
  [0],

  __InvalidLambdaFunctionOutputException
);
export var LambdaThrottledException = error(
  n0,
  _LTE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`LambdaThrottled`, 429],
  },
  [_m],
  [0],

  __LambdaThrottledException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceeded`, 400],
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListDatasetsRequest = struct(
  n0,
  _LDR,
  0,
  [_IPI, _II, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_Da, _C, _NT], [() => DatasetList, 1, 0]);
export var ListRecordsRequest = struct(
  n0,
  _LRR,
  0,
  [_IPI, _II, _DN, _LSC, _NT, _MR, _SST],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _lSC,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sST,
      },
    ],
  ]
);
export var ListRecordsResponse = struct(
  n0,
  _LRRi,
  0,
  [_R, _NT, _C, _DSC, _LMB, _MDN, _DE, _DDARSC, _SST],
  [() => RecordList, 0, 1, 1, 0, 64 | 0, 2, 2, 0]
);
export var _Record = struct(n0, _Re, 0, [_K, _V, _SC, _LMD, _LMB, _DLMD], [0, 0, 1, 4, 0, 4]);
export var RecordPatch = struct(n0, _RP, 0, [_O, _K, _V, _SC, _DLMD], [0, 0, 0, 1, 4]);
export var RegisterDeviceRequest = struct(n0, _RDR, 0, [_IPI, _II, _P, _T], [[0, 1], [0, 1], 0, 0]);
export var RegisterDeviceResponse = struct(n0, _RDRe, 0, [_DI], [0]);
export var ResourceConflictException = error(
  n0,
  _RCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ResourceConflict`, 409],
  },
  [_m],
  [0],

  __ResourceConflictException
);
export var SubscribeToDatasetRequest = struct(
  n0,
  _STDR,
  0,
  [_IPI, _II, _DN, _DI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var SubscribeToDatasetResponse = struct(n0, _STDRu, 0, [], []);
export var UnsubscribeFromDatasetRequest = struct(
  n0,
  _UFDR,
  0,
  [_IPI, _II, _DN, _DI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var UnsubscribeFromDatasetResponse = struct(n0, _UFDRn, 0, [], []);
export var UpdateRecordsRequest = struct(
  n0,
  _URR,
  0,
  [_IPI, _II, _DN, _DI, _RPe, _SST, _CC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    0,
    () => RecordPatchList,
    0,
    [
      0,
      {
        [_hH]: _xaCC,
      },
    ],
  ]
);
export var UpdateRecordsResponse = struct(n0, _URRp, 0, [_R], [() => RecordList]);
export var DatasetList = list(n0, _DL, 0, () => Dataset);
export var MergedDatasetNameList = 64 | 0;

export var RecordList = list(n0, _RL, 0, () => _Record);
export var RecordPatchList = list(n0, _RPL, 0, () => RecordPatch);
export var DeleteDataset = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200],
  },
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);
export var DescribeDataset = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200],
  },
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeIdentityUsage = op(
  n0,
  _DIU,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}", 200],
  },
  () => DescribeIdentityUsageRequest,
  () => DescribeIdentityUsageResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets", 200],
  },
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListRecords = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records", 200],
  },
  () => ListRecordsRequest,
  () => ListRecordsResponse
);
export var RegisterDevice = op(
  n0,
  _RD,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device", 200],
  },
  () => RegisterDeviceRequest,
  () => RegisterDeviceResponse
);
export var SubscribeToDataset = op(
  n0,
  _STD,
  {
    [_h]: [
      "POST",
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
      200,
    ],
  },
  () => SubscribeToDatasetRequest,
  () => SubscribeToDatasetResponse
);
export var UnsubscribeFromDataset = op(
  n0,
  _UFD,
  {
    [_h]: [
      "DELETE",
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
      200,
    ],
  },
  () => UnsubscribeFromDatasetRequest,
  () => UnsubscribeFromDatasetResponse
);
export var UpdateRecords = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200],
  },
  () => UpdateRecordsRequest,
  () => UpdateRecordsResponse
);
