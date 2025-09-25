// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ci,
  _CIPP,
  _CIPPR,
  _CIPPRl,
  _cLA,
  _fPr,
  _GIPS,
  _GIPSR,
  _GIPSRe,
  _ht,
  _iC,
  _iN,
  _IPS,
  _IPSL,
  _OIPP,
  _OIPPR,
  _OIPPRp,
  _op,
  _PI,
  _pI,
  _PIL,
  _pIor,
  _PIPP,
  _PIPPR,
  _PIPPRu,
  _pro,
  _pS,
  _sta,
  _tPo,
  n0,
  Operation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloseInstancePublicPortsRequest = struct(n0, _CIPPR, 0, [_pI, _iN], [() => PortInfo, 0]);
export var CloseInstancePublicPortsResult = struct(n0, _CIPPRl, 0, [_op], [() => Operation]);
export var GetInstancePortStatesRequest = struct(n0, _GIPSR, 0, [_iN], [0]);
export var GetInstancePortStatesResult = struct(n0, _GIPSRe, 0, [_pS], [() => InstancePortStateList]);
export var InstancePortState = struct(
  n0,
  _IPS,
  0,
  [_fPr, _tPo, _pro, _sta, _ci, _iC, _cLA],
  [1, 1, 0, 0, 64 | 0, 64 | 0, 64 | 0]
);
export var OpenInstancePublicPortsRequest = struct(n0, _OIPPR, 0, [_pI, _iN], [() => PortInfo, 0]);
export var OpenInstancePublicPortsResult = struct(n0, _OIPPRp, 0, [_op], [() => Operation]);
export var PortInfo = struct(n0, _PI, 0, [_fPr, _tPo, _pro, _ci, _iC, _cLA], [1, 1, 0, 64 | 0, 64 | 0, 64 | 0]);
export var PutInstancePublicPortsRequest = struct(n0, _PIPPR, 0, [_pIor, _iN], [() => PortInfoList, 0]);
export var PutInstancePublicPortsResult = struct(n0, _PIPPRu, 0, [_op], [() => Operation]);
export var InstancePortStateList = list(n0, _IPSL, 0, () => InstancePortState);
export var PortInfoList = list(n0, _PIL, 0, () => PortInfo);
export var CloseInstancePublicPorts = op(
  n0,
  _CIPP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CloseInstancePublicPorts", 200],
  },
  () => CloseInstancePublicPortsRequest,
  () => CloseInstancePublicPortsResult
);
export var GetInstancePortStates = op(
  n0,
  _GIPS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstancePortStates", 200],
  },
  () => GetInstancePortStatesRequest,
  () => GetInstancePortStatesResult
);
export var OpenInstancePublicPorts = op(
  n0,
  _OIPP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/OpenInstancePublicPorts", 200],
  },
  () => OpenInstancePublicPortsRequest,
  () => OpenInstancePublicPortsResult
);
export var PutInstancePublicPorts = op(
  n0,
  _PIPP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/PutInstancePublicPorts", 200],
  },
  () => PutInstancePublicPortsRequest,
  () => PutInstancePublicPortsResult
);
