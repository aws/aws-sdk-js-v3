// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _AZ,
  _c,
  _CE,
  _CT,
  _CV,
  _CVR,
  _CVRr,
  _e,
  _En,
  _hE,
  _I,
  _KKI,
  _M,
  _QC,
  _RI,
  _RT,
  _SC,
  _SI,
  _SIGB,
  _SQEE,
  _T,
  _Ta,
  _TS,
  _TSa,
  _VI,
  _VT,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_5_Resource";

/* eslint no-var: 0 */

export var ClientToken = sim(n0, _CT, 0, 8);
export var KmsKeyId = sim(n0, _KKI, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ConflictException
);
export var CreateVolumeRequest = struct(
  n0,
  _CVR,
  0,
  [_AZ, _CT, _En, _I, _KKI, _SIGB, _SI, _TS, _T, _VT],
  [0, [() => ClientToken, 4], 2, 1, [() => KmsKeyId, 0], 1, 0, () => TagSpecifications, 1, 0]
);
export var CreateVolumeResponse = struct(n0, _CVRr, 0, [_VI], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI, _RT, _SC, _QC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagSpecification = struct(n0, _TSa, 0, [_RT, _Ta], [0, () => TagList]);
export var TagSpecifications = list(n0, _TS, 0, () => TagSpecification);
export var CreateVolume = op(
  n0,
  _CV,
  2,
  () => CreateVolumeRequest,
  () => CreateVolumeResponse
);
