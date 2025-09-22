// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _bNu,
  _CSC,
  _CSCR,
  _CSCRr,
  _DSC,
  _DSCR,
  _DSCRe,
  _GSC,
  _GSCR,
  _GSCRe,
  _ht,
  _n,
  _s_,
  _SC,
  _sC,
  _SSC,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStorageConfigurationRequest = struct(
  n0,
  _CSCR,
  0,
  [_n, _s_, _t],
  [0, () => S3StorageConfiguration, 128 | 0]
);
export var CreateStorageConfigurationResponse = struct(n0, _CSCRr, 0, [_sC], [() => StorageConfiguration]);
export var DeleteStorageConfigurationRequest = struct(n0, _DSCR, 0, [_a], [0]);
export var DeleteStorageConfigurationResponse = struct(n0, _DSCRe, 0, [], []);
export var GetStorageConfigurationRequest = struct(n0, _GSCR, 0, [_a], [0]);
export var GetStorageConfigurationResponse = struct(n0, _GSCRe, 0, [_sC], [() => StorageConfiguration]);
export var S3StorageConfiguration = struct(n0, _SSC, 0, [_bNu], [0]);
export var StorageConfiguration = struct(n0, _SC, 0, [_a, _n, _s_, _t], [0, 0, () => S3StorageConfiguration, 128 | 0]);
export var CreateStorageConfiguration = op(
  n0,
  _CSC,
  {
    [_ht]: ["POST", "/CreateStorageConfiguration", 200],
  },
  () => CreateStorageConfigurationRequest,
  () => CreateStorageConfigurationResponse
);
export var DeleteStorageConfiguration = op(
  n0,
  _DSC,
  {
    [_ht]: ["POST", "/DeleteStorageConfiguration", 200],
  },
  () => DeleteStorageConfigurationRequest,
  () => DeleteStorageConfigurationResponse
);
export var GetStorageConfiguration = op(
  n0,
  _GSC,
  {
    [_ht]: ["POST", "/GetStorageConfiguration", 200],
  },
  () => GetStorageConfigurationRequest,
  () => GetStorageConfigurationResponse
);
