// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDo, _cDo, _cS, _DEC, _DECR, _DECRe, _eC, _eMr, _eTn, _h, _kARA, _kKA, _lMD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationDetails = struct(n0, _CDo, 0, [_cS, _eC, _eMr], [0, 0, 0]);
export var DescribeEncryptionConfigurationRequest = struct(n0, _DECR, 0, [], []);
export var DescribeEncryptionConfigurationResponse = struct(
  n0,
  _DECRe,
  0,
  [_eTn, _kKA, _kARA, _cDo, _lMD],
  [0, 0, 0, () => ConfigurationDetails, 4]
);
export var DescribeEncryptionConfiguration = op(
  n0,
  _DEC,
  {
    [_h]: ["GET", "/encryption-configuration", 200],
  },
  () => DescribeEncryptionConfigurationRequest,
  () => DescribeEncryptionConfigurationResponse
);
