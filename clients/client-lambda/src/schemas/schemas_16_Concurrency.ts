// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ProvisionedConcurrencyConfigNotFoundException as __ProvisionedConcurrencyConfigNotFoundException } from "../models/index";
import {
  _APCE,
  _APCEl,
  _c,
  _e,
  _FA,
  _FN,
  _GPCC,
  _GPCCR,
  _GPCCRe,
  _h,
  _hE,
  _hQ,
  _LM,
  _LPCC,
  _LPCCR,
  _LPCCRi,
  _m,
  _Ma,
  _MI,
  _NM,
  _PCC,
  _PCCL,
  _PCCLI,
  _PCCNFE,
  _PCE,
  _PPCC,
  _PPCCR,
  _PPCCRu,
  _Q,
  _RPCE,
  _SRt,
  _Sta,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetProvisionedConcurrencyConfigRequest = struct(
  n0,
  _GPCCR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetProvisionedConcurrencyConfigResponse = struct(
  n0,
  _GPCCRe,
  0,
  [_RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
  [1, 1, 1, 0, 0, 0]
);
export var ListProvisionedConcurrencyConfigsRequest = struct(
  n0,
  _LPCCR,
  0,
  [_FN, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListProvisionedConcurrencyConfigsResponse = struct(
  n0,
  _LPCCRi,
  0,
  [_PCC, _NM],
  [() => ProvisionedConcurrencyConfigList, 0]
);
export var ProvisionedConcurrencyConfigListItem = struct(
  n0,
  _PCCLI,
  0,
  [_FA, _RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
  [0, 1, 1, 1, 0, 0, 0]
);
export var ProvisionedConcurrencyConfigNotFoundException = error(
  n0,
  _PCCNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_T, _m],
  [0, 0],

  __ProvisionedConcurrencyConfigNotFoundException
);
export var PutProvisionedConcurrencyConfigRequest = struct(
  n0,
  _PPCCR,
  0,
  [_FN, _Q, _PCE],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    1,
  ]
);
export var PutProvisionedConcurrencyConfigResponse = struct(
  n0,
  _PPCCRu,
  0,
  [_RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
  [1, 1, 1, 0, 0, 0]
);
export var ProvisionedConcurrencyConfigList = list(n0, _PCCL, 0, () => ProvisionedConcurrencyConfigListItem);
export var GetProvisionedConcurrencyConfig = op(
  n0,
  _GPCC,
  {
    [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 200],
  },
  () => GetProvisionedConcurrencyConfigRequest,
  () => GetProvisionedConcurrencyConfigResponse
);
export var ListProvisionedConcurrencyConfigs = op(
  n0,
  _LPCC,
  {
    [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency?List=ALL", 200],
  },
  () => ListProvisionedConcurrencyConfigsRequest,
  () => ListProvisionedConcurrencyConfigsResponse
);
export var PutProvisionedConcurrencyConfig = op(
  n0,
  _PPCC,
  {
    [_h]: ["PUT", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 202],
  },
  () => PutProvisionedConcurrencyConfigRequest,
  () => PutProvisionedConcurrencyConfigResponse
);
