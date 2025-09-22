// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _AC, _EBO, _ECn, _EO, _KK, _OL, _RC, _SAO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AclConfiguration = struct(n0, _AC, 0, [_SAO], [0]);
export var EncryptionConfiguration = struct(n0, _ECn, 0, [_EO, _KK], [0, 0]);
export var ResultConfiguration = struct(
  n0,
  _RC,
  0,
  [_OL, _ECn, _EBO, _AC],
  [0, () => EncryptionConfiguration, 0, () => AclConfiguration]
);
