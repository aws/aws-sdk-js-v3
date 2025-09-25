// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  LastDeliveryChannelDeleteFailedException as __LastDeliveryChannelDeleteFailedException,
  NoSuchDeliveryChannelException as __NoSuchDeliveryChannelException,
} from "../models/index";
import {
  _CEDI,
  _cHDI,
  _cl,
  _CSDI,
  _cSDI,
  _cSDIo,
  _DCN,
  _DCNe,
  _DCS,
  _DCSe,
  _DCSL,
  _DDC,
  _DDCR,
  _DDCS,
  _DDCSR,
  _DDCSRe,
  _e,
  _lAT,
  _LDCDFE,
  _lEC,
  _lEM,
  _lS,
  _lSCT,
  _lST,
  _m,
  _n,
  _nDT,
  _NSDCE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigExportDeliveryInfo = struct(n0, _CEDI, 0, [_lS, _lEC, _lEM, _lAT, _lST, _nDT], [0, 0, 0, 4, 4, 4]);
export var ConfigStreamDeliveryInfo = struct(n0, _CSDI, 0, [_lS, _lEC, _lEM, _lSCT], [0, 0, 0, 4]);
export var DeleteDeliveryChannelRequest = struct(n0, _DDCR, 0, [_DCN], [0]);
export var DeliveryChannelStatus = struct(
  n0,
  _DCS,
  0,
  [_n, _cSDI, _cHDI, _cSDIo],
  [0, () => ConfigExportDeliveryInfo, () => ConfigExportDeliveryInfo, () => ConfigStreamDeliveryInfo]
);
export var DescribeDeliveryChannelStatusRequest = struct(n0, _DDCSR, 0, [_DCNe], [64 | 0]);
export var DescribeDeliveryChannelStatusResponse = struct(n0, _DDCSRe, 0, [_DCSe], [() => DeliveryChannelStatusList]);
export var LastDeliveryChannelDeleteFailedException = error(
  n0,
  _LDCDFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __LastDeliveryChannelDeleteFailedException
);
export var NoSuchDeliveryChannelException = error(
  n0,
  _NSDCE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchDeliveryChannelException
);
export var DeliveryChannelNameList = 64 | 0;

export var DeliveryChannelStatusList = list(n0, _DCSL, 0, () => DeliveryChannelStatus);
export var DeleteDeliveryChannel = op(
  n0,
  _DDC,
  0,
  () => DeleteDeliveryChannelRequest,
  () => Unit
);
export var DescribeDeliveryChannelStatus = op(
  n0,
  _DDCS,
  0,
  () => DescribeDeliveryChannelStatusRequest,
  () => DescribeDeliveryChannelStatusResponse
);
