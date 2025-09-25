// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CF, _CFo, _DCFe, _DCFRes, _DCFResc, _DI, _DIA, _RDN, _RDNe, _RS, _UCF, _UCFR, _UCFRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConditionalForwarder = struct(n0, _CF, 0, [_RDN, _DIA, _RS], [0, 64 | 0, 0]);
export var DescribeConditionalForwardersRequest = struct(n0, _DCFRes, 0, [_DI, _RDNe], [0, 64 | 0]);
export var DescribeConditionalForwardersResult = struct(n0, _DCFResc, 0, [_CFo], [() => ConditionalForwarders]);
export var UpdateConditionalForwarderRequest = struct(n0, _UCFR, 0, [_DI, _RDN, _DIA], [0, 0, 64 | 0]);
export var UpdateConditionalForwarderResult = struct(n0, _UCFRp, 0, [], []);
export var ConditionalForwarders = list(n0, _CFo, 0, () => ConditionalForwarder);
export var DnsIpAddrs = 64 | 0;

export var RemoteDomainNames = 64 | 0;

export var DescribeConditionalForwarders = op(
  n0,
  _DCFe,
  0,
  () => DescribeConditionalForwardersRequest,
  () => DescribeConditionalForwardersResult
);
export var UpdateConditionalForwarder = op(
  n0,
  _UCF,
  0,
  () => UpdateConditionalForwarderRequest,
  () => UpdateConditionalForwarderResult
);
