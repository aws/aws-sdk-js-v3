// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AId,
  _AII,
  _CCAI,
  _CCAIL,
  _CCCAI,
  _CCCAIR,
  _CCCAIRr,
  _DCCAI,
  _DCCAIe,
  _DCCAIR,
  _DCCAIRe,
  _DCCAIRes,
  _DCCAIResc,
  _MR,
  _N,
  _NT,
  _RI,
  _UCCAI,
  _UCCAIR,
  _UCCAIRp,
  _URL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectClientAddIn = struct(n0, _CCAI, 0, [_AII, _RI, _N, _URL], [0, 0, 0, 0]);
export var CreateConnectClientAddInRequest = struct(n0, _CCCAIR, 0, [_RI, _N, _URL], [0, 0, 0]);
export var CreateConnectClientAddInResult = struct(n0, _CCCAIRr, 0, [_AII], [0]);
export var DeleteConnectClientAddInRequest = struct(n0, _DCCAIR, 0, [_AII, _RI], [0, 0]);
export var DeleteConnectClientAddInResult = struct(n0, _DCCAIRe, 0, [], []);
export var DescribeConnectClientAddInsRequest = struct(n0, _DCCAIRes, 0, [_RI, _NT, _MR], [0, 0, 1]);
export var DescribeConnectClientAddInsResult = struct(
  n0,
  _DCCAIResc,
  0,
  [_AId, _NT],
  [() => ConnectClientAddInList, 0]
);
export var UpdateConnectClientAddInRequest = struct(n0, _UCCAIR, 0, [_AII, _RI, _N, _URL], [0, 0, 0, 0]);
export var UpdateConnectClientAddInResult = struct(n0, _UCCAIRp, 0, [], []);
export var ConnectClientAddInList = list(n0, _CCAIL, 0, () => ConnectClientAddIn);
export var CreateConnectClientAddIn = op(
  n0,
  _CCCAI,
  0,
  () => CreateConnectClientAddInRequest,
  () => CreateConnectClientAddInResult
);
export var DeleteConnectClientAddIn = op(
  n0,
  _DCCAI,
  0,
  () => DeleteConnectClientAddInRequest,
  () => DeleteConnectClientAddInResult
);
export var DescribeConnectClientAddIns = op(
  n0,
  _DCCAIe,
  0,
  () => DescribeConnectClientAddInsRequest,
  () => DescribeConnectClientAddInsResult
);
export var UpdateConnectClientAddIn = op(
  n0,
  _UCCAI,
  0,
  () => UpdateConnectClientAddInRequest,
  () => UpdateConnectClientAddInResult
);
