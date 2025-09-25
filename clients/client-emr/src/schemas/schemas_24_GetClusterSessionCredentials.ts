// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _CI, _Cr, _EA, _ERA, _GCSC, _GCSCI, _GCSCO, _Pas, _UP, _Us, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetClusterSessionCredentialsInput = struct(n0, _GCSCI, 0, [_CI, _ERA], [0, 0]);
export var GetClusterSessionCredentialsOutput = struct(n0, _GCSCO, 0, [_Cr, _EA], [[() => Credentials, 0], 4]);
export var UsernamePassword = struct(n0, _UP, 8, [_Us, _Pas], [0, 0]);
export var Credentials = uni(n0, _Cr, 0, [_UP], [[() => UsernamePassword, 0]]);
export var GetClusterSessionCredentials = op(
  n0,
  _GCSC,
  0,
  () => GetClusterSessionCredentialsInput,
  () => GetClusterSessionCredentialsOutput
);
