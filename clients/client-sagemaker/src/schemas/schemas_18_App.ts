// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AICv,
  _ASIC,
  _AZ,
  _CSIC,
  _HSe,
  _IT,
  _IUIC,
  _LUSBRC,
  _LUSBRCR,
  _LUSBRCRi,
  _MR,
  _NT,
  _RCA,
  _TICo,
  _UIC,
  _USIl,
  _USl,
  _USlt,
  _UST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListUltraServersByReservedCapacityRequest = struct(n0, _LUSBRCR, 0, [_RCA, _MR, _NT], [0, 1, 0]);
export var ListUltraServersByReservedCapacityResponse = struct(n0, _LUSBRCRi, 0, [_NT, _USl], [0, () => UltraServers]);
export var UltraServer = struct(
  n0,
  _USlt,
  0,
  [_USIl, _UST, _AZ, _IT, _TICo, _CSIC, _AICv, _IUIC, _ASIC, _UIC, _HSe],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0]
);
export var UltraServers = list(n0, _USl, 0, () => UltraServer);
export var ListUltraServersByReservedCapacity = op(
  n0,
  _LUSBRC,
  0,
  () => ListUltraServersByReservedCapacityRequest,
  () => ListUltraServersByReservedCapacityResponse
);
