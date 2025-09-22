// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InternalFailureException as __InternalFailureException } from "../models/index";
import {
  _CEo,
  _co,
  _CS,
  _cS,
  _e,
  _eT,
  _GDEC,
  _GDECR,
  _GDECRe,
  _h,
  _hE,
  _IFE,
  _kKA,
  _m,
  _Me,
  _PDEC,
  _PDECR,
  _PDECRu,
  _s,
  _se,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationError = struct(n0, _CEo, 0, [_co, _m], [0, 0]);
export var ConfigurationStatus = struct(n0, _CS, 0, [_e, _s], [() => ConfigurationError, 0]);
export var GetDefaultEncryptionConfigurationRequest = struct(n0, _GDECR, 0, [], []);
export var GetDefaultEncryptionConfigurationResponse = struct(
  n0,
  _GDECRe,
  0,
  [_cS, _eT, _kKA],
  [() => ConfigurationStatus, 0, 0]
);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_Me],
  [0],

  __InternalFailureException
);
export var PutDefaultEncryptionConfigurationRequest = struct(n0, _PDECR, 0, [_eT, _kKA], [0, 0]);
export var PutDefaultEncryptionConfigurationResponse = struct(
  n0,
  _PDECRu,
  0,
  [_cS, _eT, _kKA],
  [() => ConfigurationStatus, 0, 0]
);
export var GetDefaultEncryptionConfiguration = op(
  n0,
  _GDEC,
  {
    [_h]: ["GET", "/configuration/account/encryption", 200],
  },
  () => GetDefaultEncryptionConfigurationRequest,
  () => GetDefaultEncryptionConfigurationResponse
);
export var PutDefaultEncryptionConfiguration = op(
  n0,
  _PDEC,
  {
    [_h]: ["POST", "/configuration/account/encryption", 201],
  },
  () => PutDefaultEncryptionConfigurationRequest,
  () => PutDefaultEncryptionConfigurationResponse
);
