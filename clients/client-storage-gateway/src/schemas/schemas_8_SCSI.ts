// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CC,
  _CE,
  _CI,
  _CS,
  _DCC,
  _DCCe,
  _DCCI,
  _DCCIe,
  _DCCO,
  _DCCOe,
  _DSCSIA,
  _DVTLD,
  _DVTLDI,
  _DVTLDO,
  _GARN,
  _IN,
  _L,
  _M,
  _NII,
  _NIP,
  _STAI,
  _STAT,
  _TARNa,
  _UCC,
  _UCCI,
  _UCCO,
  _VTLD,
  _VTLDARN,
  _VTLDARNe,
  _VTLDe,
  _VTLDPI,
  _VTLDT,
  _VTLDV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChapSecret = sim(n0, _CS, 0, 8);
export var ChapInfo = struct(
  n0,
  _CI,
  0,
  [_TARNa, _STAI, _IN, _STAT],
  [0, [() => ChapSecret, 0], 0, [() => ChapSecret, 0]]
);
export var DeleteChapCredentialsInput = struct(n0, _DCCI, 0, [_TARNa, _IN], [0, 0]);
export var DeleteChapCredentialsOutput = struct(n0, _DCCO, 0, [_TARNa, _IN], [0, 0]);
export var DescribeChapCredentialsInput = struct(n0, _DCCIe, 0, [_TARNa], [0]);
export var DescribeChapCredentialsOutput = struct(n0, _DCCOe, 0, [_CC], [[() => ChapCredentials, 0]]);
export var DescribeVTLDevicesInput = struct(n0, _DVTLDI, 0, [_GARN, _VTLDARN, _M, _L], [0, 64 | 0, 0, 1]);
export var DescribeVTLDevicesOutput = struct(n0, _DVTLDO, 0, [_GARN, _VTLD, _M], [0, () => VTLDevices, 0]);
export var DeviceiSCSIAttributes = struct(n0, _DSCSIA, 0, [_TARNa, _NII, _NIP, _CE], [0, 0, 1, 2]);
export var UpdateChapCredentialsInput = struct(
  n0,
  _UCCI,
  0,
  [_TARNa, _STAI, _IN, _STAT],
  [0, [() => ChapSecret, 0], 0, [() => ChapSecret, 0]]
);
export var UpdateChapCredentialsOutput = struct(n0, _UCCO, 0, [_TARNa, _IN], [0, 0]);
export var VTLDevice = struct(
  n0,
  _VTLDe,
  0,
  [_VTLDARNe, _VTLDT, _VTLDV, _VTLDPI, _DSCSIA],
  [0, 0, 0, 0, () => DeviceiSCSIAttributes]
);
export var ChapCredentials = list(n0, _CC, 0, [() => ChapInfo, 0]);
export var VTLDeviceARNs = 64 | 0;

export var VTLDevices = list(n0, _VTLD, 0, () => VTLDevice);
export var DeleteChapCredentials = op(
  n0,
  _DCC,
  0,
  () => DeleteChapCredentialsInput,
  () => DeleteChapCredentialsOutput
);
export var DescribeChapCredentials = op(
  n0,
  _DCCe,
  0,
  () => DescribeChapCredentialsInput,
  () => DescribeChapCredentialsOutput
);
export var DescribeVTLDevices = op(
  n0,
  _DVTLD,
  0,
  () => DescribeVTLDevicesInput,
  () => DescribeVTLDevicesOutput
);
export var UpdateChapCredentials = op(
  n0,
  _UCC,
  0,
  () => UpdateChapCredentialsInput,
  () => UpdateChapCredentialsOutput
);
