// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _Au,
  _CT,
  _GR,
  _GRR,
  _GRRe,
  _LMT,
  _NA,
  _RAe,
  _RAela,
  _RI,
  _RN,
  _SA,
  _SN,
  _SPe,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelayRequest = struct(n0, _GRR, 0, [_RI], [0]);
export var GetRelayResponse = struct(
  n0,
  _GRRe,
  0,
  [_RI, _RAe, _RN, _SN, _SPe, _Au, _CT, _LMT],
  [0, 0, 0, 0, 1, () => RelayAuthentication, 4, 4]
);
export var NoAuthentication = struct(n0, _NA, 0, [], []);
export var UpdateRelayRequest = struct(
  n0,
  _URRp,
  0,
  [_RI, _RN, _SN, _SPe, _Au],
  [0, 0, 0, 1, () => RelayAuthentication]
);
export var UpdateRelayResponse = struct(n0, _URRpd, 0, [], []);
export var RelayAuthentication = uni(n0, _RAela, 0, [_SA, _NA], [0, () => NoAuthentication]);
export var GetRelay = op(
  n0,
  _GR,
  0,
  () => GetRelayRequest,
  () => GetRelayResponse
);
export var UpdateRelay = op(
  n0,
  _URp,
  2,
  () => UpdateRelayRequest,
  () => UpdateRelayResponse
);
