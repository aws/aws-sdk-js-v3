// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _CBAP, _MCBAP, _MCBAPR, _MCBAPRo, _PTD, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateBasedAuthProperties = struct(n0, _CBAP, 0, [_St, _CAA], [0, 0]);
export var ModifyCertificateBasedAuthPropertiesRequest = struct(
  n0,
  _MCBAPR,
  0,
  [_RI, _CBAP, _PTD],
  [0, () => CertificateBasedAuthProperties, 64 | 0]
);
export var ModifyCertificateBasedAuthPropertiesResult = struct(n0, _MCBAPRo, 0, [], []);
export var DeletableCertificateBasedAuthPropertiesList = 64 | 0;

export var ModifyCertificateBasedAuthProperties = op(
  n0,
  _MCBAP,
  0,
  () => ModifyCertificateBasedAuthPropertiesRequest,
  () => ModifyCertificateBasedAuthPropertiesResult
);
