// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cD,
  _CPMT,
  _CPMTR,
  _CPMTRr,
  _cRT,
  _DCM,
  _DCMR,
  _DCMRe,
  _dMI,
  _dPMN,
  _ht,
  _mI,
  _mIo,
  _mU,
  _pMA,
  _pMI,
  _pMN,
  _ta,
  _UPMT,
  _UPMTR,
  _UPMTRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProvisionedModelThroughputRequest = struct(
  n0,
  _CPMTR,
  0,
  [_cRT, _mU, _pMN, _mIo, _cD, _ta],
  [[0, 4], 1, 0, 0, 0, () => TagList]
);
export var CreateProvisionedModelThroughputResponse = struct(n0, _CPMTRr, 0, [_pMA], [0]);
export var DeleteCustomModelRequest = struct(n0, _DCMR, 0, [_mI], [[0, 1]]);
export var DeleteCustomModelResponse = struct(n0, _DCMRe, 0, [], []);
export var UpdateProvisionedModelThroughputRequest = struct(n0, _UPMTR, 0, [_pMI, _dPMN, _dMI], [[0, 1], 0, 0]);
export var UpdateProvisionedModelThroughputResponse = struct(n0, _UPMTRp, 0, [], []);
export var CreateProvisionedModelThroughput = op(
  n0,
  _CPMT,
  {
    [_ht]: ["POST", "/provisioned-model-throughput", 201],
  },
  () => CreateProvisionedModelThroughputRequest,
  () => CreateProvisionedModelThroughputResponse
);
export var DeleteCustomModel = op(
  n0,
  _DCM,
  {
    [_ht]: ["DELETE", "/custom-models/{modelIdentifier}", 200],
  },
  () => DeleteCustomModelRequest,
  () => DeleteCustomModelResponse
);
export var UpdateProvisionedModelThroughput = op(
  n0,
  _UPMT,
  {
    [_ht]: ["PATCH", "/provisioned-model-throughput/{provisionedModelId}", 200],
  },
  () => UpdateProvisionedModelThroughputRequest,
  () => UpdateProvisionedModelThroughputResponse
);
